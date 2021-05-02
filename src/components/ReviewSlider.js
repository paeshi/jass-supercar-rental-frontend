const ReviewSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide" id="slide-1">
          <h3>JASS Supercar Rentals</h3>
          <p>Providing high quality sportscars for your travels needs. </p>
          <br />
          <p style={{ fontSize: ".9rem" }}>
            scroll to see what our customers say ->
          </p>
        </div>
        <div className="slide" id="slide-2">
          <p>"Great experience with the staff."</p>
          <p>-S. Michaels</p>
        </div>
        <div className="slide" id="slide-3">
          <p>"Will definitely rent from here again."</p>
          <p>-P. Bradley</p>
        </div>
        <div className="slide" id="slide-4">
          <p>"The cars are amazing, the service is outstanding"</p>
          <p>-E.Smith</p>
        </div>
        <div className="slide" id="slide-5">
          <p>"Loved the experience!"</p>
          <p>-M.Holt</p>
        </div>
      </div>
    </div>
  );
};
export default ReviewSlider;
