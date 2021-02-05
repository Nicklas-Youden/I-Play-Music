import "./Playlist.scss";
import SiteHeader from "../components/SiteHeader";
import SiteDrawer from "../components/SiteDrawer";

export default function Playlist(){
  return(
    <section className="playlist">
      <SiteHeader transperent TopBackground="/Images/PlaylistTopBackground.png">Playlist</SiteHeader>
      <h1 className="playlist__title">Playlists</h1>
      <div className="playlist__imagecontainer">
      <img className="Playlist__imagecontainer" src="https://picsum.photos/150/150" alt=""/>
      <img className="Playlist__imagecontainer" src="https://picsum.photos/150/150" alt=""/>
      <img className="Playlist__imagecontainer" src="https://picsum.photos/150/150" alt=""/>
      </div>
      <h2>Top 50 Rock Ballads</h2>
    

      <SiteDrawer/>
    </section>
  )
}