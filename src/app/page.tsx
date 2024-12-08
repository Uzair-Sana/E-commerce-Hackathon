
import HeroSection from "./components/hero";
import FeaturedProducts from "./components/featured";
import Latest from "./components/latest";
import LatestBlog from "./components/blog";




export default function Home() {
  return (
   <div>
  {/*Header In Layout*/}
  <HeroSection/>
  <FeaturedProducts/>
  <Latest/>
  <LatestBlog/>
  {/*Footer In Layout*/}
   </div>
  );
}
