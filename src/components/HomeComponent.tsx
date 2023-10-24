import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

function HomeComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button className="btn" onClick={() => signOut()}>
          Sign Out
        </button>
      ) : (
        <button className="btn" onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </div>
  );
}

export default HomeComponent;
