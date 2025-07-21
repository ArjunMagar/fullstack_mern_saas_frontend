"use client";

import InstituteDashboard from "@/components/dashboard/InstituteDashboard";
import { useEffect, useState } from "react";
import { IDecodedToken } from "../institute.types";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

function InstituteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      try {
        const decoded: IDecodedToken = jwtDecode(token);

        if (decoded.role !== "institute") {
          redirect("/");
        }
      } catch (error) {
        console.log(error);
        redirect("/");
      }
    } else {
      redirect("/");
    }
  }, []);
  if (!token) return <p>Loading...</p>;
  return <InstituteDashboard>{children}</InstituteDashboard>;
}

export default InstituteLayout;
