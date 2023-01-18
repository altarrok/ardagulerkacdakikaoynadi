import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const dakika = 316;

  return (
    <>
      <Head>
        <title>Arda Guler Kac Dakika Oynadi</title>
        <meta name="description" content="Arda Guler Kac Dakika Oynadi" />
        <link rel="icon" href="/favicon.png" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3351474750680422" crossOrigin="anonymous"></script>
      </Head>
      <div className="z-0 absolute w-screen h-screen bg-[url('/ardaguler.jpg')] bg-cover bg-top brightness-50 contrast-50 hue-rotate-30 saturate-150" />
      <div className="z-10 absolute w-screen h-screen flex flex-col justify-center items-center bg-white/30 font-['Nunito']">
        <h2 className="text-xl text-[#163962] font-bold">Arda Guler Kac Dakika Oynadi?</h2>
        <h1 className="text-xl md:text-9xl text-[#ffed00] my-5">{dakika} Dakika</h1>
        <h2 className="text-xl text-[#163962] font-bold">1500 Dakika Yolunda %{(100 * dakika / 1500).toFixed(2)}</h2>
      </div>
      <footer className="z-10 absolute w-screen text-center bottom-0 inset-x-0 font-['Nunito']">
        <h1 className="text-sm text-stone-400 bg-[#163962]/75">Fan sitesidir, telif sikintisi olursa lutfen altaybatuhanmail@gmail.com uzerinden ulasin, SANLI FENERBAHCE</h1>
      </footer>
    </>
  );
};

export default Home;
