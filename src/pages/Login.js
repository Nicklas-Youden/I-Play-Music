// import "./Login.scss";
import querystring from "querystring";
import random from "../helpers/random";

export default function Login() {
  var state = random(20);
  var date = new Date();
  date = date.setSeconds(date.getSeconds() + 10);
  document.cookie = `state=${state}; expires=${date}`;

  var uri;

  if (process.env.NODE_ENV === "production") {
    uri = "https://iplaymusicnicklashansen.netlify.app/";
  } else {
    uri = "http://localhost:8888/callback";
  }

  var options = querystring.stringify({
    response_type: "code",
    client_id: "e734fb09ce11423e8ec459d526ceb050",
    scope:
      "user-read-private user-read-email user-library-read playlist-read-private playlist-read-collaborative",
    redirect_uri: process.env.NODE_ENV === "production" 
    ? "https://iplaymusicnicklashansen.netlify.app/" 
    : "http://localhost:8888/callback",
    state,
  });

  return (
    <a
      href={`https://accounts.spotify.com/authorize?${options}`}
      className="loginButton"
    >
      Log in with <i className="icon-spotify"></i>
    </a>
  );
}
