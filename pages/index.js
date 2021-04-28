import Head from "next/head";
import Image from "next/image";
import Form from "../components/form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>mockup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex h-screen ">
        <div className=" relative  lg:w-1/2 hidden md:block">
          <Image
            src="/images/SideImage.jpg"
            alt="Side Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
          />
        </div>
        <div className="lg:w-1/2">
          <Form />
        </div>
      </main>
    </div>
  );
}
