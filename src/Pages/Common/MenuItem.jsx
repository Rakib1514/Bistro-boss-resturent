import PropTypes from "prop-types";

const MenuItem = ({item}) => {

  const { name, recipe, price, image,  } = item;
  
  return (
    <div className=" flex gap-4">
      <img src={image} alt="" className="w-[100px] h-[100px] object-cover rounded-tl-none rounded-full"/>
      <div>
        <h3 className="uppercase">{name}-----------</h3>
        <p>{recipe} </p>
        <p className="text-yellow-500"> ${price}</p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
}

export default MenuItem;