
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

        <FeaturedArticle image="https://picsum.photos/300/400" album="The Greatest Showman" genre="Soundtrack"/>
        <FeaturedArticle image="https://picsum.photos/300/400" album="Black" genre="Metel"/>
        <FeaturedArticle image="https://picsum.photos/300/400" album="Guilty Clown" genre="Pop"/>
        <FeaturedArticle image="https://picsum.photos/300/400" album="The Greatest Showman" genre="Soundtrack"/>
        
      </section>
      <SiteDrawer></SiteDrawer>
    </div>
  )
}