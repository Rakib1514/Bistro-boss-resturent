import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Common/Cover";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { ScrollRestoration, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];
  const {category} = useParams();
  const initialIdx = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIdx);
  const [menu] = useMenu();

  

  const desserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="">
      <Helmet title="Bistro Boss | Order Food" />
      <ScrollRestoration />
      <Cover
        img={"https://i.ibb.co.com/31H6vFQ/banner2.jpg"}
        title={"order Food"}
      />
      <Tabs className={"my-12"} defaultIndex={tabIndex} onSelect={(idx) => setTabIndex(idx)}>
        <TabList>
          <Tab >Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}/>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}/>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default Order;
