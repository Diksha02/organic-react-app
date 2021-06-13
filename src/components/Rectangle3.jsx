import IconButton from "@material-ui/core/IconButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Rectangle3() {
  return (
    <div className="Rectangle-3 container-fluid" id="products">
      <h3 className="home-heading">Proudly presented by</h3>
      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="container brands">
        <div className="row">
          <div className="col">
            <img className="brand" src="/img/Group 39.png" alt="brand-1" />
          </div>
          <div className="col d-flex align-items-center">
            <img className="brand" src="/img/Group 64.png" alt="brand-2" />
          </div>
          <div className="col d-flex align-items-center">
            <img className="brand" src="/img/Group 55.png" alt="brand-3" />
          </div>
          <div className="col d-flex align-items-center">
            <img className="brand" src="/img/Group 64.png" alt="brand-2" />
          </div>
          <div className="col">
            <img className="brand" src="/img/Group 39.png" alt="brand-1" />
          </div>
        </div>
      </div>

      <IconButton style={{ color: "#374b5c" }}>
        <FiberManualRecordIcon fontSize="small" />
      </IconButton>
      <IconButton style={{ color: "#00dbd0" }}>
        <FiberManualRecordIcon fontSize="small" />
      </IconButton>
      <IconButton style={{ color: "#374b5c" }}>
        <FiberManualRecordIcon fontSize="small" />
      </IconButton>
      <IconButton style={{ color: "#374b5c" }}>
        <FiberManualRecordIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default Rectangle3;
