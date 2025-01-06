import { Helmet } from "react-helmet-async";
import Cover from "../Common/Cover";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";


const img = "https://i.ibb.co.com/JK2B4Zb/banner3.jpg"

const Menu = () => {

  const [menu, loading] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

  if(loading ) {
    return <h1>Loading</h1>
  }
  
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* Main cover */}
      <Cover img={img} title={"our menu"}/>
      {/* Todays Offer */}
      <SectionTitle subHeading={"Don't miss"} heading={'Todays Offer'} />
      <MenuCategory items={offered} />

      {/* Dessert */}
      <MenuCategory items={desserts} CoverImg={'https://i.ibb.co.com/DtjmWfM/dessert-bg.jpg'} title="desserts"/>

      {/* Pizza */}
      <MenuCategory items={pizza} CoverImg={'https://i.ibb.co.com/RCmr1fv/pizza-bg.jpg'} title="pizza"/>

      {/* salad */}
      <MenuCategory items={salad} CoverImg={'https://i.ibb.co.com/Bf9fyFF/salad-bg.jpg'} title="salad"/>

      {/* soup */}
      <MenuCategory items={soup} CoverImg={'https://i.ibb.co.com/TgK1jmK/soup-bg.jpg'} title="soup"/>

    </div>
  );
};

export default Menu;