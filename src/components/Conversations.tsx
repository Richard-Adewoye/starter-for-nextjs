// components/Conversations.tsx
"use client";
import { useEffect, useState } from "react";
import { databases } from "../lib/admin";

export default function Conversations() {
  const [convos, setConvos] = useState([]);

  useEffect(() => {
    async function fetchConvos() {
      const response = await databases.listDocuments("db_id", "convo_collection_id");
      setConvos(response.documents);
    }
    fetchConvos();
  }, []);

  return (
    <div>
      {convos.map((c: any) => (
        <div key={c.$id} className="border p-2 my-2">
          <p><strong>User:</strong> {c.userMessage}</p>
          <p><strong>AI:</strong> {c.aiResponse}</p>
        </div>
      ))}
    </div>
  );
}
