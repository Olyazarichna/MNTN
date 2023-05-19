import Wrapper from "./components/Wrapper/Wrapper";
import GallerySection from './components/GallerySection/GallerySection';
import Footer from './components/Footer/Footer';
import '../scss/main.scss';
const page = () => {
  return (
    <>
      <Wrapper />
      <GallerySection />
      <Footer />
    </>
  )
}


export default page;