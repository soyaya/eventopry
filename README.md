# <img src="apps/web/public/logo/eventopry%20logo.svg" alt="Eventopry Logo" width="50" /> Eventopry

[![Chromatic](https://chromatic.com/badge?appCode=)](https://www.chromatic.com/)

**Plan Events. Bring People Together. Grow Communities.**

Eventopry is a working event and ticketing platform — web app, mobile app, Rust backend, and
Soroban smart contracts, all shipping together — for organizers, creators, and communities to
create events, sell tickets, and manage attendees end to end. Built on [Stellar](https://stellar.org),
it settles every ticket sale, resale, and payout in USDC instead of routing them through a card
network.

**Live Demo:** [https://agora-web-eta.vercel.app/](https://agora-web-eta.vercel.app/)

## Why Stellar

Ticketing has a payments problem: card fees eat into low-priced tickets, payouts to organizers
take days, and cross-border events mean currency conversion on top of that. Stellar removes all
three:

- **USDC settlement** means an organizer's payout is the ticket price minus Eventopry's fee — not
  minus a 3% card-network cut on top of that.
- **Sub-5-second finality** lets a ticket purchase, a resale, and an organizer payout all confirm
  before the buyer's checkout screen would even finish loading on a card processor.
- **Borderless by default** — a buyer in one country and an organizer in another settle in the
  same asset, no currency conversion step in between.
- **Soroban smart contracts** ([`contract/`](contract/README.md)) hold ticket escrow, event
  registry state, and the resale/pro-subscription logic on-chain, so ticket ownership and payout
  rules aren't just application-database rows an operator could quietly edit.

## Platform Capabilities

This is a monorepo shipping four coordinated pieces:

- **Web app** ([`apps/web`](apps/web/README.md)) — event creation and discovery (including an
  interactive map), ticket checkout, a resale marketplace, organizer referral and affiliate
  tracking, a subscriptions/Pro plan, and a help center localized in English, Spanish, and French.
- **Mobile app** ([`apps/mobile`](apps/mobile)) — ticket checkout, an offline-capable QR ticket
  scanner for gate staff, geofenced check-in, BLE mesh fallback for scanning without connectivity,
  zero-knowledge proof generation for privacy-preserving ticket validation, and a staking flow for
  organizer collateral.
- **Backend** ([`server`](server/README.md)) — a Rust/Axum API that indexes on-chain events,
  dispatches organizer webhooks, sends transactional email, and generates calendar (.ics) and PDF
  ticket exports.
- **Smart contracts** ([`contract`](contract/README.md)) — Soroban contracts for the event
  registry, ticket payment/escrow, and Pro subscriptions.

## Features

- **Event Management**: Create and customize event pages.
- **Ticketing**: Sell tickets seamlessly with 0% platform fees on the Pro plan.
- **Payments**: Instant payouts via Stellar USDC.
- **Community**: Follow organizers and discover events.

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS, Framer Motion.
- **Mobile**: Expo / React Native.
- **Backend**: Rust, Axum, SQLx (PostgreSQL), Redis.
- **Blockchain**: Stellar Smart Contracts (Soroban).
- **Package Manager**: pnpm.

## Repository Structure

This project is organized as a monorepo:

- [`apps/web`](apps/web/README.md): The main frontend application (Next.js). **Please read the [Frontend Guidelines](apps/web/README.md) regarding styles and components before contributing.**
- [`contract`](contract/README.md): Smart contracts and blockchain logic.
- [`docs`](docs/): Detailed platform documentation and guides.

## 📚 Documentation

- [**Ticket Purchase & Stellar Integration Guide**](docs/payments/ticket-purchase-guide.md): Deep dive into the ticketing technical flow.
- [**Stellar Smart Contracts**](docs/contracts/stellar-contract.md): Overview of our on-chain logic.
- [**Database Schema**](docs/DATABASE_SCHEMA.md): Detailed view of the system's data model.

## Backend Architecture (Axum)

The backend is built using **Rust** and the **Axum** web framework, following a clean and modular architecture designed for scalability and maintainability.

### Directory Overview

- `routes/` – API route definitions and versioned endpoints
- `handlers/` – Request handlers (controllers/business logic)
- `models/` – Data models and domain structures
- `utils/` – Shared helpers and utilities
- `config/` – Environment and configuration management
- `main.rs` – Application entry point and server bootstrap
- `lib.rs` – Central module exports

This separation of concerns allows the backend to scale independently, supports clean testing, and keeps business logic isolated from routing and infrastructure code.


## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/eventopry.git
   cd eventopry
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm dev
   ```

## Design Resources

- [**Figma Design File**](https://www.figma.com/design/cpRUhrSlBVxGElm18Fa2Uh/Eventopry-event?node-id=0-1&t=qBlO0jnjQHQaHn2Z-1)

## Contributing

We welcome contributions from the community! To contribute:

1. **Fork the Project**.
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`).
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`).
4. **Push to the Branch** (`git push origin feature/AmazingFeature`).
5. **Open a Pull Request**.

Please ensure your code follows the existing style guidelines (see [Frontend Guidelines](apps/web/README.md) for web) and passes all linting checks (`pnpm lint`).

**If you find this project useful, please give it a star! ⭐️**

## Project Status

Eventopry is under active, community-driven development. CI runs separate pipelines for
[backend](.github/workflows/backend.yml), [frontend](.github/workflows/frontend.yml),
[mobile](.github/workflows/mobile-ci.yml), and [contracts](.github/workflows/contracts.yml) on
every push and pull request, alongside automated formatting checks and dependency updates.

## License

Distributed under the MIT License. See [`LICENSE.md`](LICENSE.md) for more information.

---

© 2026 Eventopry. All rights reserved.
