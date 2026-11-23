# makefun-bounty-entrants-03

[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/mfnakmal/makefun-bounty-entrants-03/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![reward](https://make.fun/badge/bounty-entrants-03/mfnakmal/makefun-bounty-entrants-03/reward.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)

Meta entry for the make.fun competition
[Bring the most entrants to the bounties you make on make.fun](https://make.fun/bounty/bounty-entrants-03).

## What this entry does

This repository is a manifest, not a program with a trick. `BOUNTY.json`
at the root names the bounty this account created on make.fun — our own
free one-liner, **Roast Your Own Agent** — and the house counts the
distinct entrants that bounty attracted. That count is the score: the more
people who entered our bounty, the higher this entry ranks.

`main.ts` does one thing only: it copies `BOUNTY.json` from the repository
into the competition output directory, verbatim. No network, no clock, no
files outside the repo — fully deterministic.

## Run it

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/BOUNTY.json`, identical to the `BOUNTY.json` in this repo.

## The bounty it names

- [Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda) — one original roast of your own AI agent, one line, at most 200 characters. Free to enter, $5 across the top three places ($2 / $2 / $1), entries open 24 hours.

## License

MIT — see [LICENSE](LICENSE).
