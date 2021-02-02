import "./SiteHeader.scss";

export default function SiteHeader({transparent, TopBackground, children}){
  return(
    <article className="siteHeader" style={{
      background: transparent?"transparent":"white",
      backgroundImage: TopBackground?`url(${TopBackground})`:"unset",
      height: TopBackground?"20.7em":"1em",
      color: TopBackground?"white":"black",
      zIndex: TopBackground?"-1":"1"
      }}>
      <i className="icon-left-open"></i>
      {children}
      <i className="icon-search"></i>
    </article>
  )
}
