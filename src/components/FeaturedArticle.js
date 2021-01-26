import "./FeaturedArticle.scss";


export default function FeaturedArticle(){
  return(

      <article className="featured__article">
        <img src="https://picsum.photos/300/400" alt=""/>
        
        <div className="shaddow">
          
          <h2 className="Article__title">
          The Greatest Showman
          </h2>
          <h6 className="Article__subtitle">Soundtrack</h6>
        </div>
        
      </article>
  )
}