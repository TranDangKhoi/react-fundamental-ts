import WaveIcon from "src/components/Icons/WaveIcon";
import "./HomepageBanner.scss";
import PlanATripIcon from "src/components/Icons/PlanATripIcon";
import ManPicture from "src/assets/ManPicture.png";

// Note #1:
// Span là một thẻ inline -> đồng nghĩa với việc là các đoạn text sẽ nằm ngang hàng nhau
// chỉ khi nào vượt quá width quy định thì mới xuống dòng

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
          <span className="banner-button-icon">
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
