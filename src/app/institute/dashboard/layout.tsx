"use client";

import InstituteDashboard from "@/components/dashboard/InstituteDashboard";
import { useEffect } from "react";
import { IDecodedToken } from "../institute.types";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

function InstituteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
      const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: IDecodedToken = jwtDecode(token);
      
        if (decoded.role !== "institute") {
          redirect("/");
        }
      } catch (error) {
        console.log(error);
        redirect("/")
      }
    }else{
      redirect("/")
    }
  }, []);

  return <InstituteDashboard>{children}</InstituteDashboard>;
}

export default InstituteLayout;
