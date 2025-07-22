import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Abdul Rehman - Software Developer",
  description:
    "Hi, I'm Abdul Rehman, a passionate Software Developer who loves building modern web and mobile applications.\n\nI'm skilled in technologies like React.js, Node.js, Express.js, MongoDB, React Native, and Laravel. With a strong commitment to clean code and problem-solving, I enjoy turning ideas into real-world applications.\n\nI consider myself a hard worker, a quick learner, and a natural problem solver. Whether it's building responsive UIs or creating full-stack solutions, I focus on writing efficient and maintainable code.\n\nIf you're looking for someone who's eager to learn, takes initiative, and can work across the full stack — I'm definitely hireable.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/profile.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <Analytics />
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
