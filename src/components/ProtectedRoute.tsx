// components/ProtectedRoute.tsx
"use client";

import { useEffect, useState, ReactNode } from "react";
import { account } from "../lib/admin";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAdmin() {
      try {
        const user = await account.get();
        // Adjust this line based on your actual user object structure
        if (user.prefs?.role === "admin") {
          setLoading(false);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      }
    }
    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <>{children}</>;
}
