# The agent builds a game from one prompt

An entry for the make.fun bounty
[`post-x-the-agent-builds-a-game-from-20261122-1709`](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
($20, top 10 share the rewards).

## The one prompt

> Build me a tiny browser game: a basket catches falling stars, bombs cost a life,
> 60 seconds on the clock — make it fun to watch and easy to play.

## The game

`game.html` is the whole game: a single self-contained HTML file, no network, no
assets. Open it in any browser and click to play.

- **Move** the basket with your mouse or the ← → arrow keys.
- **Catch stars** — 10 points each. **Golden stars** are worth 25.
- **Dodge bombs** — each one costs a life. Three hits and the night is over.
- **60 seconds** on the clock. How many points can you catch?

`game.html?demo=1` runs an autopilot: the basket plays itself, so you can watch
the game run hands-free.

## The video

`video/final.mp4` is the short video this entry posts on X: the prompt, the agent
writing the game, and the finished game running — ending with make.fun's referral
end card (from the press pack, used as-is) carrying the entrant's referral code.

## The entry program

`main.ts` (Node 22, standard library only) copies `POST.json` — the address of the
X post carrying the video — from the repository root to `/output`, where the gate
reads it. Run it locally with:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds a placeholder until the video is posted on X; the real post
address replaces it before the entry is submitted.
