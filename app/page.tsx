import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>Diodex</h1>
      <p>DEX Aggregator on IOPn Chain</p>

      <ul>
        <li>
          <Link href="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link href="/trade">Trade</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/wallet">Wallet</Link>
        </li>
      </ul>
    </main>
  );
}
