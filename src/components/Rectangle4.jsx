import StarBorderIcon from "@material-ui/icons/StarBorder";
// import IconButton from "@material-ui/core/IconButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

function Rectangle4() {
  return (
    <div className="Rectangle-4 container-fluid">
      <img src="/img/Group 86.png" alt="quotes" />
      <img
        src="img/woman-in-brown-jacket-and-black-shirt-3484683.jpg"
        className="testimonial-img"
        alt="testimonial"
      />
      <h4>Jane Doe</h4>
      <div className="stars">
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
        <StarBorderIcon />
      </div>
      <p className="testimonial-text">
        Thank you for all the amazing produce and products you deliver each
        week… you make my life so easy an bring goodness into our family eating.
        I’ve been roasting a lot of brussel sprouts and
      </p>
      <div className="tab-buttons">
        <FiberManualRecordIcon fontSize="default" className="tab-button" />
        <RadioButtonUncheckedIcon fontSize="small" className="tab-button" />
        <RadioButtonUncheckedIcon fontSize="small" className="tab-button" />
        <RadioButtonUncheckedIcon fontSize="small" className="tab-button" />
      </div>
      <img src="/img/Group 134.png" alt="leaves" className="leaves-img" />
    </div>
  );
}

export default Rectangle4;
