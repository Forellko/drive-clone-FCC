import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function HomeComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <Image
          src={session.user.image ?? ""}
          alt="user"
          onClick={() => signOut()}
          width={100}
          height={100}
          className="absolute right-5 top-5 cursor-pointer rounded-lg"
        />
      ) : (
        <button className="btn absolute right-5 top-5" onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </div>
  );
}

export default HomeComponent;
