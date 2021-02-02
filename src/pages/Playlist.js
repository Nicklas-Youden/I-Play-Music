import "./Playlist.scss";
import SiteHeader from "../components/SiteHeader";
import SiteDrawer from "../components/SiteDrawer";

export default function Playlist(){
  return(
    <article className="Wrapper">
    <SiteHeader transperent TopBackground="/Images/PlaylistTopBackground.png">Playlist</SiteHeader>
    <h1>Playlists</h1>
    <img className="Playlist__topImage--left" src="https://picsum.photos/150/150" alt=""/>
    <img className="Playlist__topImage--Center" src="https://picsum.photos/150/150" alt=""/>
    <img className="Playlist__topImage--Right" src="https://picsum.photos/150/150" alt=""/>
    <h2>Top 50 Rock Ballads</h2>


    <SiteDrawer/>
    </article>
  )
}