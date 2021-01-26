import "./SiteDrawer.scss"
import {Link} from "@reach/router"

export default function SiteDrawer(){
  return(
    <nav className="SiteDrawer">
      <Link className="SiteDrawer__button" to="/albums">
      <i className="icon-th-list"></i>
      </Link>
      <Link className="SiteDrawer__button" to="/playlist">
      <i className="icon-mic"></i>
      </Link>
      <Link className="SiteDrawer__button SiteDrawer__button--large" to="/featured">
      <i className="icon-fire"></i>
      </Link>
      <Link className="SiteDrawer__button" to="/">
      <i className="icon-adjust"></i>
      </Link>
      <Link className="SiteDrawer__button" to="/categories">
      <i className="icon-cog"></i>
      </Link>
    </nav>
  )
}