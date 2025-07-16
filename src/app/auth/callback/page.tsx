"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch } from "@/lib/store/hooks";
import { setStatus, setToken, setUser } from "@/lib/store/auth/authSlice";
import { Status } from "@/lib/store/global/types";

function CallbackLogic() {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParams.get("token");
    const encodedUser = searchParams.get("user");

    if (token && encodedUser) {
      try {
        const user = JSON.parse(decodeURIComponent(encodedUser));
        localStorage.setItem("token", token);
        dispatch(setStatus(Status.Success));
        dispatch(setToken(token));
        dispatch(setUser(user));
        router.push("/");
      } catch (error) {
        console.error("User decode error:", error);
        alert("Something went wrong decoding user.");
      }
    } else {
      alert("Missing token or user data.");
    }
  }, [searchParams, dispatch, router]);

  return <p>Logging you in...</p>;
}

export default function CallbackPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CallbackLogic />
    </Suspense>
  );
}
