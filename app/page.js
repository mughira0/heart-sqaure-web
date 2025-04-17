import AboutUs from "../components/aboutUs";
import Banner from "../components/banner";
import Header from "../components/core/header";
import Newsletter from "../components/newsletter";
import AboutSection from "../views/aboutSection";
import HeroSection from "../views/heroSection";
import CompanyMarquee from "../components/ui/company-marquee";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <main className="overflow-hidden mainDiv relative">
      <Header />

      <HeroSection />
      <AboutSection />
      <Banner />
      <AboutUs data={dat} notGrayscale />
      <div className="bg-bgLight relative mt-10">
        <CompanyMarquee />
      </div>
      <Testimonials />

      <Newsletter />
    </main>
  );
}

const dat = {
  title: "About Us",
  image: "/images/about.jpg",
  description1:
    "A team of passionate developers, designers, and problem-solvers focused on building high-quality digital products. With a strong foundation in modern web technologies, we aim to deliver fast, scalable, and intuitive user experiences.",
  description2:
    "From startups to established brands, we help turn ideas into reality by creating solutions that are both beautiful and functional. Every project is a collaboration, and we strive to bring clarity, efficiency, and innovation to the table.",
};
