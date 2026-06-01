import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to Diodex</h1>
        <p>DEX Aggregator on IOPn Chain</p>
      </main>
    </>
  );
}
