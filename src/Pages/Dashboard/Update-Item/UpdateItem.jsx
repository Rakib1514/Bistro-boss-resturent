import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_imgbb_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

  const {name , category, recipe, price, _id} = useLoaderData();


  const [btnLoading, setBtnLoading] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imgFile = { image: data.image[0] };
    try {
      setBtnLoading(true);
      const res = await axiosPublic.post(image_hosting_api, imgFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        // send the menu data with image url
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        };

        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log(menuRes.data);
        if (menuRes.data.modifiedCount > 0) {
          alert(`menu item is update`);
        }
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setBtnLoading(false);
    }
  };
  
  return (
    <div>
      <SectionTitle heading={'Update Item'} subHeading={'Always updated'}/>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">Recipe Name*</div>
            <input
              type="text"
              defaultValue={name}
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered w-full "
            />
          </label>

          <div className="flex gap-6">
            {/* category */}
            <label className="form-control w-full ">
              <div className="label">Select a category*</div>
              <select
                defaultValue={category}
                className="select select-bordered w-full  capitalize"
                {...register("category", { required: true })}
              >
                <option disabled value={"default"}>
                  Select category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dessert">dessert</option>
                <option value="drinks">drinks</option>
              </select>
            </label>

            {/* Price */}
            <label className="form-control w-full ">
              <div className="label">Price*</div>
              <input
                type="number"
                defaultValue={price}
                {...register("price", { required: true })}
                placeholder="Price"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <label className="form-control w-full my-6">
            <div className="label">Recipe Details*</div>
            <textarea
            defaultValue={recipe}
              {...register("recipe", { required: true })}
              placeholder="Write Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </label>

          <label className="form-control w-full my-6">
            <div className="label">Recipe Image*</div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full "
            />
          </label>

          {/* include validation with required or other standard HTML validation rules */}
          <input
            type="submit"
            value="Update"
            className={`btn  mt-6 ${
              btnLoading ? "btn-disabled" : "btn-outline"
            }`}
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;