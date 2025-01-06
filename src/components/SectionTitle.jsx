import PropTypes from "prop-types";


const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center my-12 ">
      <p className="text-yellow-600">--- {subHeading} ---</p>
      <h2 className="text-3xl uppercase border-y-2 border-gray-300 py-4 my-2 inline-block md:w-4/12"> {heading} </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
}

export default SectionTitle;
