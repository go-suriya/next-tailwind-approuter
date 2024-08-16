import { Metadata } from "next";
import HomePage from "./Home";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page description",
  keywords: ["Home", "Next.JS", "Tailwind CSS"],
};

// tsrfc
export default function Home() {
  return <HomePage />;
}
