import "./FeaturedArticle.scss";

export default function FeaturedArticle({ album, genre, image }) {
  return (
    <article className="featured__article">
      <img src={image} alt="" />

      <div className="shaddow">
        <h2 className="Article__title">{album}</h2>
        <h6 className="Article__subtitle">{genre}</h6>
      </div>
    </article>
  );
}
