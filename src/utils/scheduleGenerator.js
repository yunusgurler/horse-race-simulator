const ROUND_DISTANCES = [1200, 1400, 1600, 1800, 2000, 2200];

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function pickRandomHorses(horses, count = 10) {
  if (!Array.isArray(horses) || horses.length === 0) {
    return [];
  }

  const pool = [...horses];
  const picked = [];

  const safeCount = Math.min(count, pool.length);

  for (let i = 0; i < safeCount; i++) {
    const index = randInt(0, pool.length - 1);
    const horse = pool[index];

    picked.push(horse);

    pool.splice(index, 1);
  }

  return picked;
}

export function createScheduleItem(horses, i) {
  return {
    id: i + 1,
    title: ROUND_DISTANCES[i] + "m",
    distance: ROUND_DISTANCES[i],
    horses: pickRandomHorses(horses, 10),
    status: "Pending",
    isFinished: false,
  };
}

/**
 * Create N random horses
 */
export function createSchedule(horses) {
  console.log("createSchedule called");
  const count = 6;
  const schedule = [];
  console.log("horses", horses);

  for (let i = 0; i < count; i++) {
    schedule.push(createScheduleItem(horses, i));
  }
  console.log("schedule: ", schedule);

  return schedule;
}
