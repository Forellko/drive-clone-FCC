import { useRouter } from "next/router";
import React from "react";
import ShowFiles from "~/components/ShowFilesComponent";
import UploadFilesComponent from "~/components/UploadFilesComponent";

export default function FolderPage() {
  const router = useRouter();

  const parentId = router?.query?.id as string;

  return (
    <div>
      <UploadFilesComponent parentId={parentId} />
      <ShowFiles parentId={parentId} />
    </div>
  );
}
