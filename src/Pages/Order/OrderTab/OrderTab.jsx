import PropTypes from 'prop-types';
import FoodCard from '../../../components/FoodCard';

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-2">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;