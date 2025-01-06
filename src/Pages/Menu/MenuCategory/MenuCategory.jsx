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
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  CoverImg: PropTypes.string,
};

export default MenuCategory;
