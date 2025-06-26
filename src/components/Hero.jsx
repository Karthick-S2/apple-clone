import React from "react";

const Hero = () => {
  return (
    <section className="relative">
      <div className="mt-6 relative">
        <img
          src="https://www.apple.com/v/home/cf/images/heroes/bts-2025/hero_bts_2025__kjxalx8t7ia2_mediumtall_2x.jpg"
          alt=""
          className="heroImg"
        />
      </div>

      <h1 className="absolute top-20 text-4xl left-1/2 transform -translate-x-1/2 md:text-6xl  font-semibold bg-blue-500 text-white p-4 rounded-2xl">
        Buy Mac <br />
        or iPad for <br />
        college
      </h1>

      <p className="absolute top-60 left-1/2 transform -translate-x-1/2 md:text-4xl text-2xl md:top-80 bg-blue-500 text-white p-3 rounded-2xl">
        with education savings*
      </p>

      <h2 className="absolute top-80 left-1/2 transform -translate-x-1/2 md:text-6xl sm:text-4xl md:top-96 mt-7 text-white bg-blue-500 p-3 rounded-2xl">
        Choose
        <br /> AirPods or <br />
        an eligible <br />
        accessory
      </h2>
      <div>
        <button className="absolute bottom-10 md:bottom-90 left-1/2 transform -translate-x-1/2 bg-transparent text-black border border-black px-6 py-2 rounded-full hover:bg-blue-600 transition">
          Shop
        </button>
      </div>
    </section>
  );
};

export default Hero;
