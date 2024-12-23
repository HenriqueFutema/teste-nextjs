"use client"

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"

export function ButtonSSO() {
  function handleLogin() {
    signIn("github", { callbackUrl: "/home" })
  }

  return (
    <Button
      onClick={handleLogin}
      className="w-full"
    >
      Login com GitHub
    </Button>
  )
}