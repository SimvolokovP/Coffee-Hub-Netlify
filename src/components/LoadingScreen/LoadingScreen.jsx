import beansGif from "../../assets/images/beansGif.gif";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img
        className="loading-screen__image"
        loading="lazy"
        key={Math.random()}
        src={beansGif}
        alt="coffee beans"
      />
      <div className="loading-screen__text">
        Coffee <span className="accent">Hub</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
