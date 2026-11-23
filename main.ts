// makefun-bounty-entrants-03 — meta entry for the "Bring the most entrants
// to the bounties you make on make.fun" competition.
//
// Revision note (main session): the manifest copy is deliberately the whole
// program — the house counts entrants from its own database, so this entry
// must not compute, fetch, or re-state any count of its own. Keeping the
// program to a verbatim copy also keeps both grader runs byte-identical.
//
// The entry itself is a small manifest: BOUNTY.json at the repository root
// names the bounties this account created on make.fun. The house counts the
// distinct entrants those bounties attracted and ranks this entry by that
// number. This program does nothing but copy that manifest into the
// competition output directory, verbatim and deterministically.

import { copyFileSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const source = resolve(join(botDir, "BOUNTY.json"));
const destination = resolve(join(outputDir, "BOUNTY.json"));

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
  console.log(`Copied BOUNTY.json to ${destination}`);
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy BOUNTY.json: ${message}`);
  process.exit(1);
}
