import "./../components/WelcomeLogo.scss";

export default function Welcome(){
    return(
      <div className="Welcome">
          <img className="Welcome__Logo" src="./images/welcomeLogoLight.png" alt=""/>
          <p className="Welcome__text">iPlayMusic</p>
      </div>
    )
}