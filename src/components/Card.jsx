function Card(props) {
  var src = "/img/Group " + props.imgnum + ".png";
  return (
    <div className="card">
      <img src={src} alt="card" />
    </div>
  );
}

export default Card;
