const HORSE_COLORS = [
  "#ef4444", // red
  "#f97316", // orange
  "#22c55e", // green
  "#0ea5e9", // sky
  "#6366f1", // indigo
  "#a855f7", // purple
  "#facc15", // yellow
  "#14b8a6", // teal
  "#e11d48", // rose
  "#3b82f6", // blue
  "#16a34a", // emerald
  "#a3e635", // lime
  "#f59e0b", // amber
  "#e5e7eb", // zinc-100 (light gray)
  "#6b7280", // zinc-500 (gray)
  "#f472b6", // pink
  "#fb7185", // soft red
  "#4ade80", // light green
  "#38bdf8", // light sky
  "#c4b5fd", // soft violet
];

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export function createRandomHorse(id) {
  const number = String(id).padStart(2, "0");

  return {
    id,
    name: `Horse ${number}`,
    color: HORSE_COLORS[id - 1],
    condition: randInt(60, 100),
  };
}

export function createRandomHorses(count = 20) {
  console.log("createRandomHorses called");

  const horses = [];
  for (let i = 1; i <= count; i++) {
    horses.push(createRandomHorse(i));
  }
  return horses;
}
