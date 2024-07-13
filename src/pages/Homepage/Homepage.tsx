import Navbar from "src/components/Navbar";
import HomepageBanner from "src/pages/Homepage/components/HomepageBanner";

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HomepageBanner></HomepageBanner>
      <Navbar></Navbar>
    </div>
  );
};

export default Homepage;
