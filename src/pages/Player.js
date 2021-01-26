import "./Player.scss";
import SiteHeader from "../components/SiteHeader";

export default function Player(){
  return(
    <article className="Player">
    <SiteHeader>Playing</SiteHeader>
    <img className="Player__backgroundImage" src="https://picsum.photos/300/400" alt=""/>
    </article>
    
  )
}