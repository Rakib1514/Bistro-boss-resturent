import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import { Popconfirm } from "antd";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const { cart, refetch } = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`carts/${id}`);
      if (res.data.deletedCount) {
        refetch();
        alert("Removed");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">
          Total Price: {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </h2>
        <button className="btn btn-outline">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar hover:scale-150 transition-all duration-300 ease-in-out">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <Popconfirm
                    title="Remove From cart"
                    description="Are you sure to Remove this item?"
                    onConfirm={() => handleDelete(item._id)}
                    okText="Remove"
                    cancelText="No"
                  >
                    <button className="btn btn-ghost btn-md text-xl text-red-600">
                      <FaTrashAlt />
                    </button>
                  </Popconfirm>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
