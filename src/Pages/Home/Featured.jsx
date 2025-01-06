import SectionTitle from "../../components/SectionTitle";

const Featured = () => {
  return (
    <div
      className="bg-fixed bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/rtRY8Jd/featured.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-40 text-white backdrop-blur-sm py-6">
        <SectionTitle subHeading={"Check it out"} heading={"Featured Item"} />

        <div className="md:flex justify-center items-center gap-10 py-8 px-16 ">
          <div>
            <img src="https://i.ibb.co.com/rtRY8Jd/featured.jpg" alt="" className="shadow-xl"/>
          </div>
          <div>
            <div className="space-y-2">
              <p className=" text-xl">Aug 20, 2029</p>
              <p className="uppercase text-xl"> Where can I get some?</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, adipisci eum commodi magnam similique quaerat aut
                facilis praesentium quod sequi. Dignissimos facilis provident
                dolor incidunt id vero tenetur? Deserunt modi adipisci ipsam
                nemo omnis ullam tenetur ab fugiat amet iure facilis repellat
                ratione, optio, nesciunt sapiente molestias? Et, alias ipsa.
              </p>
            </div>
            <button className="btn btn-outline border-0 border-b-2 text-white mt-4 uppercase">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
