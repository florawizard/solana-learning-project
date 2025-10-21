import { Connection, clusterApiUrl } from "@solana/web3.js";

async function main() {
  // Connect to the Solana devnet
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  // Fetch the current cluster version
  const version = await connection.getVersion();
  console.log("Solana cluster version:", version);
}

main().catch((err) => {
  console.error(err);
});
