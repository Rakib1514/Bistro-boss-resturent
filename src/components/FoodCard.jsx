import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";

const FoodCard = ({ item }) => {
  const [btnLoading, setBtnLoading] = useState(false);

  const { name, recipe, price, image, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const axiosSecure = useAxiosSecure();

  const handleAddToCart = async (food) => {
    setBtnLoading(true);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      try {
        const res = await axiosSecure.post("/carts", cartItem);
        if (res.data.insertedId) {
          alert(`${name} Added to the cart`);
        }
      } catch (error) {
        alert(`Error adding to cart: ${error.message}`);
      } finally {
        setBtnLoading(false);
      }
    } else {
      alert("Please sign in or create account for order");
      navigate("/log-in", { state: { from: location } });
    }
  };

  return (
    <div className="card bg-base-100 w-96 hover:shadow-xl border border-gray-300 my-2">
      <figure>
        <img src={image} alt="" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-4 top-4 px-2 py-1">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className={`btn border-0 border-b-2 border-orange-700 text-black mt-4 ${
              btnLoading ? "btn-disabled" : "btn-outline"
            }`}
          >
            {btnLoading ? "Adding to cart..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.object,
};

export default FoodCard;
