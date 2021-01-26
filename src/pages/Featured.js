
import FeaturedArticle from "../components/FeaturedArticle";
import SiteDrawer from "../components/SiteDrawer";
import SiteHeader from "../components/SiteHeader";
import "./Featured.scss";

export default function Featured(){
  return(
    <div className="wrapper">
      <SiteHeader>Featured</SiteHeader>
      <h1 className="Featured__title">Featured</h1>
      <section className="featured__articles">

        <FeaturedArticle/>
        <FeaturedArticle/>
        <FeaturedArticle/>
        <FeaturedArticle/>
      </section>
      <SiteDrawer></SiteDrawer>
    </div>
  )
}