'use client'

import {useSession} from "next-auth/react";

export default function Profile() {
  const session = useSession()

  if (session.data?.user) {
    return (<div>Client: Signed in!!</div>)
  } else {
    return (<div>Client: Signed out!!</div>)
  }
}