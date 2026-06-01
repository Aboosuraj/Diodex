import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px", paddingBottom: "80px" }}>
        <h1>Welcome to Diodex</h1>
        <p>DEX Aggregator on IOPn Chain</p>

        <h2>Market Overview</h2>
        <p>Market data integration coming soon.</p>
      </main>
      <MobileNav />
    </>
  );
}
