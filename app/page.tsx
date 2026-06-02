export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Diodex</h1>

      <p>
        DEX aggregator and portfolio tracker for the IOPn ecosystem.
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        <a href="/markets">Markets</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/swap">Swap</a>
        <a href="/wallet">Wallet</a>
      </div>
    </main>
  );
}
