import { useState } from "react";
import PropTypes from "prop-types";
import FoodCard from "../../../components/FoodCard";
import { Pagination } from "antd";

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // Cards per page

  // Calculate paginated items
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
        {paginatedItems.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={items.length}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array,
};

export default OrderTab;
