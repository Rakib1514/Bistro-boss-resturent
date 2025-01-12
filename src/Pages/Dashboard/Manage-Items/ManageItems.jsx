import { Popconfirm } from "antd";
import SectionTitle from "../../../components/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();

  const axiosSecure = useAxiosSecure();

  const handleDelete = async (id) => {
    try {
      const res = await axiosSecure.delete(`/menu/${id}`);
      if (res.data.deletedCount > 0) {
        refetch();
        alert("deleted");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (loading) {
    return <h2>Loading in Manage Items</h2>;
  }

  return (
    <div>
      <SectionTitle heading={"Manage All Items"} subHeading={"Hurry up"} />

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {menu.map((item, idx) => (
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
                <td>
                  <Link to={`/dashboard/update-item/${item._id}`}>
                    <button className="btn btn-ghost btn-md text-xl text-green-black hover:text-white hover:bg-primaryD">
                      <FaEdit />
                    </button>
                  </Link>
                </td>
                <td>
                  <Popconfirm
                    title="Remove From Menu"
                    description="Are you sure to Remove this item?"
                    onConfirm={() => handleDelete(item._id)}
                    okText="Remove"
                    cancelText="No"
                  >
                    <button className="btn btn-ghost btn-md text-xl text-red-600">
                      <FaTrashAlt />
                    </button>
                  </Popconfirm>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
