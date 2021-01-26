import "./SiteHeader.scss";

export default function SiteHeader({children}){
  return(
    <article className="siteHeader">
      <i className="icon-left-open"></i>
      {children}
      <i className="icon-search"></i>
    </article>
  )
}
