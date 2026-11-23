// Entry for "The agent builds a game from one prompt" (Node 22, standard library only).
//
// The entry itself is a post on X: a short video about an AI coding agent building
// the tiny browser game in game.html from one prompt, ending with make.fun's referral
// end card and the entrant's referral code, posted natively on X from a public account
// with make.fun or @makefunai and the entrant's play code in the post's text.
//
// All this program has to do is copy POST.json from the repository root to /output,
// where the gate reads the post's address. The house reads the post itself from X;
// nothing this program writes about the post is scored.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json copied to ${join(OUTPUT_DIR, 'POST.json')}`);
