import axios from "axios";
import FeaturedArticle from "../components/FeaturedArticle";
import TokenContext from "../contexts/TokenContext";
import SiteDrawer from "../components/SiteDrawer";
import SiteHeader from "../components/SiteHeader";
import "./Featured.scss";
import { useContext, useEffect, useState } from "react";

export default function Featured() {
  var [token] = useContext(TokenContext);
  var [content, setContent] = useState({});

  useEffect(
    function () {
      axios
        .get("https://api.spotify.com/v1/browse/featured-playlists", {
          headers: {
            Authorization: "Bearer " + token.access_token,
          },
        })
        .then((response) => {
          setContent(response.data);
        });
    },
    [token, setContent]
  );

  return (
    <div className="wrapper">
      <SiteHeader>Featured</SiteHeader>
      <h1 className="Featured__title">Featured</h1>
      <section className="featured__articles">
        {content.playlists?.items.map(function (item) {
          return (
            <FeaturedArticle
              key={item.id}
              image={item.images[0].url}
              album={item.name}
              genre={item.type}
            />
          );
        })}
      </section>
      <SiteDrawer></SiteDrawer>
    </div>
  );
}
