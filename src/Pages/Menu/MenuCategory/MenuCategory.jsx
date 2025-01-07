import { Link } from "react-router-dom";
import Cover from "../../Common/Cover";
import MenuItem from "../../Common/MenuItem";
import PropTypes from "prop-types";

const MenuCategory = ({ items, title, CoverImg }) => {
  return (
    <div className="">
      {title && <Cover img={CoverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-16 w-5/6 mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-2 text-black mt-4 uppercase">
          Order Now
        </button>
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  CoverImg: PropTypes.string,
};

export default MenuCategory;
