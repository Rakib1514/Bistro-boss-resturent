import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../Common/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <section className="mb-12">
      <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"} />

      <div className="grid md:grid-cols-2 gap-4">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-2 mt-4 uppercase">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
