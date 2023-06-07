export const timeSlots = [];
for (let i = 9; i <= 18; i++) {
  timeSlots.push(`${i.toString().padStart(2, "0")}:00`);
  timeSlots.push(`${i.toString().padStart(2, "0")}:30`);
}

export const DAYS = ["월", "화", "수", "목", "금"];
