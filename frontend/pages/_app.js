import "@/styles/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${geistSans.className} ${geistMono.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
