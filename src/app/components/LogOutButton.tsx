"use client"

import { signOut } from "next-auth/react"

const LogOutbutton = () => {
  return (
    <button className="btn btn-outline" onClick={() => signOut()}>
        Sair
    </button>
  )
}

export default LogOutbutton