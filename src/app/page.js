import Hero from "./components/Hero/Hero";
import GallerySection from './components/GallerySection/GallerySection';
import Footer from './components/Footer/Footer';
import '../scss/main.scss';
const page = () => {
  return (
    <>
      <Hero />
      <GallerySection />
      {/* <Footer /> */}
    </>
  )
}


export default page;