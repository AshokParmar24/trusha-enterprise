import Image from "next/image";
import Header from "@/components/Header/Header";
import Dashboard from "@/components/Dashboard/Dashboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}
