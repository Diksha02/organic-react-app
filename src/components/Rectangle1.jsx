import Navbar from "./Navbar";

function Rectangle1() {
  return (
    <div className="Rectangle-1 container-fluid">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 ">
            <h2>Healthy life with </h2>
            <h1>Nature Organic</h1>
            <p>
              Vegetables are the edible parts of a plant that is used in cooking
              or can be eaten now.
            </p>
            <button type="button" className="btn btn-info">
              Explore Now
            </button>
          </div>
          <div className="col-lg-7 col-md-12">
            <img
              className="homepage-flower"
              src="/img/Group 195.png"
              alt="img1"
              height="470"
              width="320"
            />
            <div className="homepage-square">
              <img
                src="/img/Group 228.png"
                alt="img2"
                height="200"
                width="200"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle1;
