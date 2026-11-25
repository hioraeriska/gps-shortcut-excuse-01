import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "The map said shortcut. It never mentioned the lake, the wedding, or the goat. I stand by every single wrong turn.";

function buildExcuse(): string {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("excuse must be a single line");
  }
  return text;
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), buildExcuse(), "utf8");
}

main();
