import React from "react";

const Hsection = () => {
  return (
    <section className="hsec grid grid-cols-2 p-4 mt-2 m-3 relative">
      <div className="mr-2 relative">
        <img
          src="https://www.apple.com/in/home/promos/ios-18/images/promo_ios18__eo1lt24j3wk2_medium_2x.jpg"
          alt=""
        />

        <h1 className="text-5xl absolute font-bold  top-8 left-1/2 transform -translate-x-1/2">
          iOS 18
        </h1>
        <p className="text-xl mt-2 absolute top-20 ml-2 left-1/2 transform -translate-x-1/2">
          Personalise your iPhone with 10 Indian languages.
        </p>
        <a
          href="#"
          className="text-blue-400 text-xl absolute top-44 left-1/2 transform -translate-x-1/2"
        >
          Learn more{" "}
        </a>
      </div>
      <div className="relative">
        <img
          src="https://www.apple.com/v/home/cf/images/promos/ipad-air/promo_ipad_air__bfbxzvw65c02_medium_2x.jpg"
          alt=""
          className="relative"
        />
        <h1 className="absolute top-8 font-bold text-5xl left-1/2 transform -translate-x-1/2">
          iPad
        </h1>
        <p className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl w-96 ml-8 mt-2">
          Now supercharged by the M3 chip.
        </p>
        <button className="bg-blue-600 text-white p-4 rounded-full  absolute top-32 left-1/3 transform -translate-x-1/2">
          Learn More
        </button>
        <button className="hover:bg-blue-600 bg-transparent border border-black absolute  top-32 left-1/2 transform translate-x-1/3 ml-5 text-blue-600 p-4 rounded-full  hover:text-white">
          Buy
        </button>
        <h3 className="absolute w-96 ml-16 mt-4 bottom-10  left-1/2 transform -translate-x-1/2 text-xl ">
          Build for Apple Intelligence
        </h3>
      </div>
      <div className="mt-4 mr-2 relative">
        <img
          src="https://www.apple.com/v/home/cf/images/promos/macbook-pro/promo_macbookpro_announce__gdf98j6tj2ie_medium_2x.jpg"
          alt=""
          className="relative"
        />
        <h1 className="absolute top-8 font-bold text-5xl left-1/2 transform -translate-x-1/2 text-white w-96 ml-14">
          MacBook Pro
        </h1>
        <p className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl w-96 ml-32 mt-2  text-white">
          A work of smart
        </p>
        <button className="bg-blue-600 text-white p-4 rounded-full  absolute top-32 left-1/3 transform -translate-x-1/2">
          Learn More
        </button>
        <button className="hover:bg-blue-600 bg-transparent border border-white absolute  top-32 left-1/2 transform translate-x-1/3 ml-5 text-blue-600 p-4 rounded-full  hover:text-white">
          Buy
        </button>
        <h3 className="absolute w-96 ml-16 mt-4 bottom-10   text-white left-1/2 transform -translate-x-1/2 text-xl ">
          Build for Apple Intelligence
        </h3>
      </div>
      <div className="mt-4 relative">
        <img
          src="https://www.apple.com/v/home/cf/images/promos/iphone-family/promo_iphone_family__ofrg9zdy1teq_medium_2x.jpg"
          alt=""
          className="relative"
        />
        <h1 className="absolute top-8 font-bold text-5xl left-1/2 transform -translate-x-1/2 ">
          iPhone
        </h1>
        <p className="absolute top-20 left-1/2 transform -translate-x-1/2 text-xl w-96 ml-20 mt-2">
          Meet the iPhone 16 family.
        </p>
        <button className="bg-blue-600 text-white p-4 rounded-full  absolute top-32 left-1/3 transform -translate-x-1/2">
          Learn More
        </button>
        <button className="hover:bg-blue-600 bg-transparent border border-black absolute  top-32 left-1/2 transform translate-x-1/3 ml-5 text-blue-600 p-4 rounded-full  hover:text-white">
          Buy
        </button>
        <h3 className="absolute w-96 ml-16 mt-4 top-44   left-1/2 transform -translate-x-1/2 text-xl ">
          Build for Apple Intelligence
        </h3>
      </div>
      <div className="mt-4 mr-2 relative text-white ">
        {/* <img src="https://www.apple.com/v/home/cf/images/logos/iphone-tradein/promo_logo_iphone_tradein__7y3gtai5az66_medium_2x.png" alt="" /> */}
        <img
          src="https://www.apple.com/v/home/cf/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_medium_2x.jpg"
          alt=""
        />
        <h1 className="absolute text-4xl top-56 left-1/2 transform -translate-x-1/2">
          AirPods 4
        </h1>
        <p className="absolute text-xl top-64 mt-1 left-1/2 transform -translate-x-1/2">
          Iconic. Now supersonic
        </p>
        <p className="absolute text-xl top-72 left-1/2 transform -translate-x-1/2">
          Acailable with Active Noise
        </p>
        <p className="absolute text-xl top-80 left-1/2 transform -translate-x-1/2">
          Cancelation.
        </p>
        <button className="bg-blue-600 text-white p-4 rounded-full  absolute bottom-10 left-1/3 transform -translate-x-1/2">
          Learn More
        </button>
        <button className="hover:bg-blue-600 bg-transparent border border-white absolute  bottom-10 left-1/2 transform translate-x-6 ml-5 text-blue-600 p-4 rounded-full  hover:text-white">
          Buy
        </button>
      </div>
      <div className="mt-4 relative">
        <img
          src="https://www.apple.com/v/home/cf/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg"
          alt=""
        />
        <h1 className="absolute text-4xl top-14 left-1/2 transform -translate-x-1/2">
          Trade In
        </h1>
        <p className="absolute top-24 text-xl w-96 text-center left-1/2 transform -translate-x-1/2">
          Upgrade and saves. it's that easy.
        </p>
        <button className="bg-blue-600 text-white p-4 rounded-full  absolute top-32 left-1/2 transform -translate-x-1/2">
          Get Your Estimate
        </button>
      </div>
    </section>
  );
};

export default Hsection;
