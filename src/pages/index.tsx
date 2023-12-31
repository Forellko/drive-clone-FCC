import Head from "next/head";
import HomeComponent from "~/components/HomeComponent";
import ShowFilesComponent from "~/components/ShowFilesComponent";
import UploadFilesComponent from "~/components/UploadFilesComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeComponent />
        <UploadFilesComponent parentId="" />
        <ShowFilesComponent parentId="" />
      </main>
    </>
  );
}
