// src/pages/test.tsx
import { useEffect, useState } from "react";
import { account, databases } from "../lib/appwrite";

export default function TestPage() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    async function testConnection() {
      try {
        // Try to get the logged-in user
        const user = await account.get();
        setStatus(`✅ Connected! Logged in as: ${user.name || user.$id}`);
      } catch (err) {
        console.log("No active session, testing database connection...");
        try {
          // Use your env variables here
          const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID as string;
          const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID as string;

          // Just list documents to confirm DB connection
          const response = await databases.listDocuments(databaseId, collectionId);
          console.log(response);
          setStatus("✅ Connected to Appwrite Database!");
        } catch (dbErr) {
          console.error(dbErr);
          setStatus("❌ Not connected to Appwrite");
        }
      }
    }
    testConnection();
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">{status}</h1>
    </main>
  );
}
