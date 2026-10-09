# Developer Guide

## Repository roles

| Repo | Contents |
| --- | --- |
| `anchorflow-app` | Next.js 15 / React 19 frontend, TypeScript 5.8 |
| `anchorflow-backend` | Node.js HTTP service (ESM), TypeScript 5.8, `tsx` dev runner |
| `anchorflow-contracts` | Soroban Rust contract (`no_std`), soroban-sdk 28 |

## Source structure — anchorflow-app

```text
anchorflow-app/
├── app/page.tsx        # Landing page (network summary card)
├── lib/stellar.ts      # networkSummary() helper
├── docs/               # This documentation site (MkDocs Material)
├── assets/             # social-preview + logo
└── .github/workflows/  # CI (build + test) and Pages deployment
```

## Source structure — anchorflow-backend

```text
anchorflow-backend/
├── src/server.ts       # createServer-based HTTP service
└── src/server.test.ts  # node --test baseline
```

## Source structure — anchorflow-contracts

```text
anchorflow-contracts/
├── contracts/anchorflow/
│   └── src/lib.rs      # AnchorFlowContract
├── Cargo.toml          # workspace, release profile tuned for size
└── Makefile            # test / build / fmt
```

## Local development

=== "App"

    ```bash
    npm install
    npm run dev     # next dev, port 3000
    npm run build   # production build
    npm test        # node --test
    ```

=== "Backend"

    ```bash
    npm install
    npm run dev     # tsx src/server.ts, port 8787
    npm run build   # tsc
    npm test        # node --test
    ```

=== "Contracts"

    ```bash
    cargo test      # runs the Soroban test (uses mock_all_auths)
    cargo fmt --all -- --check
    make build      # stellar contract build
    ```

## Contract test conventions

The Soroban test uses `env.mock_all_auths()` and `Address::generate(&env)` from
`soroban_sdk::testutils` — required for soroban-sdk 28, where `env.accounts()`
no longer exists and auth must be mocked in tests.

## Contribution workflow

1. Branch from `main`.
2. Keep changes focused; add tests for behavior changes.
3. Run the repo checks (commands above) before opening a PR.
4. Use Conventional Commits (`feat:`, `fix:`, `docs:`, `test:`, `chore:`).

See [CONTRIBUTING.md](https://github.com/Anchor-Flow-s/anchorflow-app/blob/main/CONTRIBUTING.md).

## Documentation site

The docs live in `docs/` of this repo and build with MkDocs Material:

```bash
pip install mkdocs-material
mkdocs serve     # local preview at http://localhost:8000
mkdocs build --strict
```

CI builds the site with `--strict` so broken links fail the build.
