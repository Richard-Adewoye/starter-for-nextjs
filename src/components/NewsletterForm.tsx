// components/NewsletterForm.tsx
"use client";
import { useState } from "react";
import { databases } from "../lib/admin";

export default function NewsletterForm() {
  const [message, setMessage] = useState("");

  const sendNewsletter = async () => {
    // get all subscribers from DB
    const subscribers = await databases.listDocuments("db_id", "collection_id");
    // loop through and send newsletter via API / email provider
    setMessage(`Sent to ${subscribers.documents.length} users`);
  };

  return (
    <div>
      <textarea
        placeholder="Write newsletter..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendNewsletter}>Send</button>
    </div>
  );
}
