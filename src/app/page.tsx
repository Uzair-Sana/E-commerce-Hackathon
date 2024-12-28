
import HeroSection from "./components/hero";
import FeaturedProducts from "./components/featured";
import Latest from "./components/latest";
import LatestBlog from "./components/blog";
import Offers from "./components/offers";
import Unique from "./components/unique";
import TrendingProducts from "./components/trending";
import Discount from "./components/discount";
import TopCategories from "./components/topCategories";
import Newslater from "./components/newslater";




export default function Home() {
  return (
   <div>
  {/*Header In Layout*/}
  <HeroSection/>
  <FeaturedProducts/>
  <Latest/>
  <Offers/>
  <Unique/>
  <TrendingProducts/>
  <Discount/>
  <TopCategories/>
  <Newslater/>
  <LatestBlog/>
  {/*Footer In Layout*/}
   </div>
  );
}
