import PropTypes from "prop-types";

const FoodCard = ({item}) => {

  const { name, recipe, price, image,  } = item;
  
  return (
    <div className="card bg-base-100 w-96 hover:shadow-xl border border-gray-300 my-2">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <p className="bg-slate-900 text-white absolute right-4 top-4 px-2 py-1">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-2 border-orange-700 text-black mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
}

export default FoodCard;
