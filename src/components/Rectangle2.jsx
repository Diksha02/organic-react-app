import Card from "./Card";

function Rectangle2() {
  return (
    <div id="home" className="Rectangle-2 container-fluid">
      <img src="/img/Group 114.png" alt="img3" />
      <h3 className="home-heading">Welcome to Nature</h3>
      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="container">
        <div className="row">
          <div className="col">
            <Card imgnum="207" />
          </div>
          <div className="col">
            <Card imgnum="205" />
          </div>
          <div className="col">
            <Card imgnum="207" />
          </div>
          <div className="col">
            <Card imgnum="207" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rectangle2;
