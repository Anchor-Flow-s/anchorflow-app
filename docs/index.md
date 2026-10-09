# AnchorFlow

**Payment routing and settlement tooling for Stellar anchors.**

> **Status: v0.1.0 development baseline — not audited, not production-ready.**

AnchorFlow is a three-repository system for Stellar anchors that need deterministic payment routing and settlement with on-chain state as the source of truth. Off-chain services stay out of consensus-critical logic.

## The three repositories

| Repository | Role | Documentation here |
| --- | --- | --- |
| [anchorflow-contracts](https://github.com/Anchor-Flow-s/anchorflow-contracts) | On-chain Soroban state and authorization | [Smart Contract](contract.md) |
| **anchorflow-app** (this repo) | User-facing web application | [User Guide](user-guide.md) |
| [anchorflow-backend](https://github.com/Anchor-Flow-s/anchorflow-backend) | Off-chain indexing/API and operational services | [Backend API](api.md) |

## Key features (current baseline)

- **Next.js web app** (App Router) with a Stellar testnet network-summary view.
- **Soroban contract** with admin initialization, auth-gated writes, and value storage (`initialize` / `record` / `read`).
- **Minimal backend** HTTP service with `/health` and `/network` endpoints.
- TypeScript across the app and backend; Rust (`no_std`) for the contract.

## Architecture at a glance

```mermaid
flowchart LR
    U[User browser] --> A[anchorflow-app<br/>Next.js]
    A -- reads public chain state --> R[Stellar RPC<br/>Soroban testnet]
    A -- authenticated writes --> W[Wallet / signing layer]
    R --> C[anchorflow-contracts<br/>on-chain state]
    B[anchorflow-backend<br/>routing / API] --> R
    A -- BACKEND_URL --> B
```

## Where to start

- New contributor? → [Getting Started](getting-started.md)
- Want to run the app? → [User Guide](user-guide.md)
- Calling the backend? → [Backend API](api.md)
- Building the contract? → [Smart Contract Guide](contract.md)

## Important resources

- Source code: [github.com/Anchor-Flow-s](https://github.com/Anchor-Flow-s)
- Maintainer: **Hikmaholadele** ([@Hikmaholadele](https://github.com/Hikmaholadele))
- License: [Apache-2.0](https://github.com/Anchor-Flow-s/anchorflow-app/blob/main/LICENSE)
- Security policy: [SECURITY.md](https://github.com/Anchor-Flow-s/anchorflow-app/blob/main/SECURITY.md)
