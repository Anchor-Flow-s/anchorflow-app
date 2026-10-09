# Getting Started

This guide covers all three AnchorFlow repositories. Commands are verified against the current `main` branches.

## Prerequisites

| Tool | Version | Needed for |
| --- | --- | --- |
| Node.js | ≥ 20 | anchorflow-app, anchorflow-backend |
| npm | ≥ 10 | anchorflow-app, anchorflow-backend |
| Rust (stable) | recent stable | anchorflow-contracts |
| `wasm32v1-none` target | — | building the contract to `.wasm` |
| Stellar CLI | latest | `stellar contract build` (contract repo `make build`) |

Install the WASM target for contract work:

```bash
rustup target add wasm32v1-none
```

## Clone the repositories

```bash
git clone https://github.com/Anchor-Flow-s/anchorflow-app.git
git clone https://github.com/Anchor-Flow-s/anchorflow-backend.git
git clone https://github.com/Anchor-Flow-s/anchorflow-contracts.git
```

## Install and run each component

=== "anchorflow-app"

    ```bash
    cd anchorflow-app
    npm install
    npm run dev
    ```

    The app runs at <http://localhost:3000>.

=== "anchorflow-backend"

    ```bash
    cd anchorflow-backend
    npm install
    npm run dev
    ```

    The service runs on port `8787`. Verify with:

    ```bash
    curl http://localhost:8787/health
    # {"ok":true,"service":"anchorflow-backend"}
    ```

=== "anchorflow-contracts"

    ```bash
    cd anchorflow-contracts
    make test    # cargo test
    make build   # stellar contract build (produces .wasm)
    ```

## Configuration

Each repo ships a `.env.example`. Copy it before running:

- **anchorflow-app** → `.env.local` (see [Configuration](configuration.md))
- **anchorflow-backend** → `.env` (see [Configuration](configuration.md))

The contract crate needs no environment variables.

## Run the tests

| Repo | Command |
| --- | --- |
| anchorflow-app | `npm test` |
| anchorflow-backend | `npm test` |
| anchorflow-contracts | `cargo test` |

## First-run sanity checks

1. `anchorflow-app` loads at `http://localhost:3000` and shows the testnet network summary.
2. `curl http://localhost:8787/health` returns `{"ok":true,...}`.
3. `cargo test` in the contracts repo prints `test result: ok`.
