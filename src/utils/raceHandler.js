const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function handleStartRaces({
  schedule,
  onRoundStart,
  onRoundFinish,
}) {
  for (const round of schedule) {
    const roundId = round.id;

    if (onRoundStart) {
      onRoundStart(roundId);
    }

    const start = Date.now();

    await sleep(8000);

    const elapsedMs = Date.now() - start;

    const placement = computeHorseResultsForRound(round);
    console.log("round", round);
    console.log("placement", placement);

    if (onRoundFinish) {
      onRoundFinish(roundId, elapsedMs, placement);
    }
  }
}

export function computeHorseResultsForRound(round) {
  const { distance, horses } = round;
  if (!distance || !Array.isArray(horses)) return [];

  const baseMs = distance * 5; 

  const withTimes = horses.map((horse) => {
    const condition = horse.condition ?? 50;
    const conditionBonus = (100 - condition) * 20;
    const timeMs = baseMs + conditionBonus;

    return {
      ...horse,
      timeMs,
    };
  });

  const sorted = withTimes
    .slice()
    .sort((a, b) => a.timeMs - b.timeMs)
    .map((horse, index) => ({
      ...horse,
      rank: index + 1,
    }));

  const minTime = sorted[0].timeMs;
  const maxTime = sorted[sorted.length - 1].timeMs;
  const span = maxTime - minTime || 1;

  const withPlace = sorted.map((horse) => {
    const normalized = (maxTime - horse.timeMs) / span;

    const place = 5 + normalized * 95;

    return {
      ...horse,
      place,
    };
  });

  return withPlace;
}
