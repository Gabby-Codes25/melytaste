import Link from "next/link";
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <div className="bg-banner bg-cover bg-center opacity-70 h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 font-mono">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to MelyTaste</h1>
          <p className="mt-5 text-lg md:text-xl">Your go-to place for the best tastes and recipes.</p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bond py-2 px-4 rounded"><Link href="/">Get Started</Link></button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
