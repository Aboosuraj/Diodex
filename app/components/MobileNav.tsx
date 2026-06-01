import Link from "next/link";

export default function MobileNav() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "12px",
        borderTop: "1px solid #ddd",
        background: "#fff",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/watchlist">Watchlist</Link>
      <Link href="/trade">Trade</Link>
      <Link href="/portfolio">Portfolio</Link>
      <Link href="/wallet">Wallet</Link>
    </nav>
  );
}
