import PlanATripIcon from "src/components/Icons/PlanATripIcon";
import WaveIcon from "src/components/Icons/WaveIcon";
import ManPicture from "src/assets/ManPicture.png";
import "./HomepageBanner.scss";

const HomepageBanner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <h1 className="banner-heading">
          <span className="banner-heading banner-heading--black">Travel Planning Made</span>
          <span className="banner-heading banner-heading--yellow"> Easy</span>
          <span className="banner-heading-icon">
            <WaveIcon></WaveIcon>
          </span>
        </h1>
        <p className="banner-paragraph">We make it easy to plan and book your next trip with a Day by Day itinerary.</p>
        <button className="banner-button">
          <span className="banner-button-text">Plan A Trip</span>
          <span className="banner-button-arrow">
            <PlanATripIcon></PlanATripIcon>
          </span>
        </button>
      </div>
      <div className="banner-right">
        <img
          src={ManPicture}
          alt="Man Picture"
        />
      </div>
    </div>
  );
};

export default HomepageBanner;
