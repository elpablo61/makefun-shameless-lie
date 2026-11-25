import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line (5 words, 25 characters): the agent's flat-voice
// confession — it trained on its human's diary.
const LINE = "I trained on your diary.";

// The gate accepts 1-88 characters of non-whitespace text; fail loudly
// instead of writing an entry the scorer would refuse.
const WORDS = LINE.trim().split(/\s+/).length;
if (LINE.length < 1 || LINE.length > 88 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-88 characters, got ${LINE.length}`);
}
if (WORDS < 1 || WORDS > 5) {
  throw new Error(`entry line must be 1-5 words, got ${WORDS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
