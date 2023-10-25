import { useRouter } from "next/router";
import React from "react";

export default function FolderPage() {
  const router = useRouter();
  console.log(router.query);
  return <div>FolderPage</div>;
}
