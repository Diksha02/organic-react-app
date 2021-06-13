function Rectangle5() {
  return (
    <div className="Rectangle-5 container-fluid" id="contact">
      <h3 className="home-heading">Subscribe to Our Newsletter</h3>
      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form action="">
        <div className="container-fluid">
          <div className="row form-row">
            <div className="form-col col-md-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="email-input"
              />
            </div>
            <div className="form-col col-md-4">
              <button type="submit" className="btn btn-info subscribe-btn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Rectangle5;
