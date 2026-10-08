import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>AnchorFlow</h1><p>Payment routing and settlement tooling for Stellar anchors.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
