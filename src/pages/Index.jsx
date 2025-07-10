import "../styles/shapeDivs.css";
import Cta from "../components/sections/Cta";
import Faq from "../components/sections/Faq";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Steps from "../components/sections/Steps";
import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import FooterSocial from "../components/sections/FooterSocial";
import AboutInstagram from "../components/sections/AboutInstagram";
import BackToTopButton from "../components/interactives/BackToTopButton";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import Maps from "../components/sections/Maps";
import TeamCards from "../components/sections/TeamCards";
import BlogPosts from "../components/sections/BlogPosts";
import SectionForm from "../components/sections/SectionForm";
import FeaturesQuadrada from "../components/sections/FeaturesQuadrada";
import ButtonsSection from "../components/sections/ButtonsSection";
import ModelosJuridicos from "../components/sections/ModelosJuridicos";

export default function Index() {
  // Altere esta constante para: 'default', 'light' ou 'dark'
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} />

      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={false}
        influencer={true}
        mesclado={false}
      />
      <SectionForm />

      <ButtonsSection />
      <FeaturesQuadrada />
      <ModelosJuridicos />
      <About modal={true} showGallery={false} colorMode={colorMode} />
      <Steps colorMode={colorMode} />
      {/* <BlogPosts /> */}
      <Features
        colorMode={colorMode}
        defaultFeature={false}
        button={true}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
      {/* <AboutInstagram
        colorMode={colorMode}
        instagram={true}
        socialPrint={true}
        linkedin={true}
      /> */}
      <Cta colorMode={colorMode} />
      {/* <Maps colorMode={colorMode} /> */}
      {/* <Faq colorMode={colorMode} /> */}
      <FooterSocial
        colorMode={colorMode}
        addres={true}
        addresSecundario={true}
        phoneSecundario={true}
        phoneTerciario={false}
        emailSecundario={true}
        emailTerciario={true}
        emailQuatro={true}
        instagram={true}
        expedientesecond={false}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
