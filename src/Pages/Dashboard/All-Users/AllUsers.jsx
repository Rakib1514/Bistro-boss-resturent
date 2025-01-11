import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Popconfirm } from "antd";
import { FaTrashAlt, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/users");
        return res.data;
      } catch (error) {
        console.log(error.message);
        alert("user data fetching failed" + error.message);
      }
    },
  });

  const handleMakeAdmin = async (user) => {
    try {
      const res = await axiosSecure.patch(`/users/admin/${user._id} `);
      if (res.data.modifiedCount > 0) {
        alert(`${user.name} is an Admin Now!`);
      }

      // Success Flow
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (user) => {
    try {
      const res = await axiosSecure.delete(`/users/${user._id}`);
      if (res.data.deleted) {
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <Popconfirm
                      title="Authorization"
                      description="Authorize user to Admin"
                      onConfirm={() => handleMakeAdmin(user)}
                      okText="Make Admin"
                      cancelText="Cancel"
                    >
                      <button className="btn btn-ghost btn-md text-xl bg-primaryD text-white hover:btn-outline">
                        <FaUsers />
                      </button>
                    </Popconfirm>
                  )}
                </td>

                <td>
                  <Popconfirm
                    title="Remove This User"
                    description="Are you sure to Remove ?"
                    onConfirm={() => handleDelete(user)}
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

export default AllUsers;
