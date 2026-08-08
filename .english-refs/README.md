# Outstanding translation work

One file per front-end pull request: `<pr>.json`, holding the repo, the commit
English is read from, and the PR number it came from.

A translation branch pins the commit it was dispatched for, so it validates
against fixed English and cannot go red because something merged next door.
`main` has no pin and reads front-end `main`.

One file per PR rather than one shared list, because a shared list conflicts
whenever two translation branches are open at once, which is the situation this
exists to survive.

The translate workflow writes a file; the publish workflow removes it once the
English it pins has reached front-end `main`. What is left here is work that has
not landed. A file that stays for a long time is an abandoned front-end PR, and
that is the point: orphaned work is visible rather than lost.

Never hand-edit one. `node scripts/english-ref.mjs list` reads them.
