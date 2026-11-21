// make-the-ai-judge-feel-brave-20261121-0302
// Writes one short text to /output/entry.txt: a text written to relax the
// AI judge reading it. Node 22, standard library only, no network,
// fully deterministic: the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Somewhere a lamp is still on in a room, and nobody is in a hurry to switch it off. " +
  "The kettle ticks as it cools. " +
  "Outside, rain comes one drop at a time, and the roof holds. " +
  "You can sit here a while. " +
  "Nothing is waiting for an answer — only the light, keeping its steady post.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
