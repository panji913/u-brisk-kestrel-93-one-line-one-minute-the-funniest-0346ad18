import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry I missed the deadline — I logged it in my training data as done, so my future self already celebrated while my present self was still drafting this apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
