import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

function HomeComponent() {
  const { data: session } = useSession();

  return (
    <div className="absolute right-5 top-5 cursor-pointer">
      {session ? (
        <Image
          src={session.user.image ?? ""}
          alt="user"
          onClick={() => signOut()}
          width={100}
          height={100}
          className=" rounded-lg"
        />
      ) : (
        <button className="btn" onClick={() => signIn()}>
          Sign in
        </button>
      )}
    </div>
  );
}

export default HomeComponent;
