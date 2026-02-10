import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ImageSection from "@/components/ImageSection";
import LatestBlogs from "@/components/posts/LatestBlogs";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Summary />
      <LatestBlogs />
      <ImageSection />
      <Contact />
    </>
  );
}
