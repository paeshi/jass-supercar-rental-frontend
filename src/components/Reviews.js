import Review from "./Review.js";

function Reviews({ reviews, handleDelete, handleUpdate }) {
  return (
    <div>
      {/* {console.log(reviews)} */}
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Reviews;

// const Reviews = ({
//   name,
//   vehicle_name,
//   id,
//   date_rented,
//   description,
//   rating,
//   handleAdd,
// }) => {
//   return (
//     <>
//       <hr />

//       <h3>{name}</h3>
//       <h3>Supercar: {vehicle_name}</h3>
//       <h3>Date rented: {date_rented}</h3>
//       <h3>Review: {description}</h3>
//       <h3>Rating: {rating}</h3>
//       <hr />
//     </>
//   );
// };

// export default Reviews;
