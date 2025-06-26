import React from "react";

function scrollToImage(imgId) {
  const image = document.getElementById(imgId);
  image?.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest",
  });
}

const SlideComp = () => {
  return (
    <div className="relative">
      <div
        className="flex gap-1 overflow-x-auto scroll-smooth"
        id="imageContainer"
      >
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/4UEcdeb6Xoc40fhFSAr3Og/1378x774.jpg"
          alt=""
          id="img1"
        />
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/YOgobsksqgV_waAIE0-63A/1378x774.jpg"
          alt=""
          id="img2"
        />
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/5geoozRQUAjDnWF2KLHyJg/1378x774.jpg"
          alt=""
          id="img3"
        />
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/EUeDAPovZrBtOcrP2Da5Lw/1378x774.jpg"
          alt=""
          id="img4"
        />
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/3pfG0GJkoI0OFlPiIDdvUQ/1378x774.jpg"
          alt=""
          id="img5"
        />
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/LEDx4gCVQd_lTJt81zQq8w/1378x774.jpg"
          alt=""
          id="img6"
        />
      </div>

      <div className="flex items-center justify-center gap-4 mt-4 bg-gray-300 py-2">
        <input
          type="radio"
          name="radio_btn"
          id="rb1"
          onClick={() => scrollToImage("img1")}
        />
        <input
          type="radio"
          name="radio_btn"
          id="rb2"
          onClick={() => scrollToImage("img2")}
        />
        <input
          type="radio"
          name="radio_btn"
          id="rb3"
          onClick={() => scrollToImage("img3")}
        />
        <input
          type="radio"
          name="radio_btn"
          id="rb4"
          onClick={() => scrollToImage("img4")}
        />
        <input
          type="radio"
          name="radio_btn"
          id="rb5"
          onClick={() => scrollToImage("img5")}
        />
        <input
          type="radio"
          name="radio_btn"
          id="rb6"
          onClick={() => scrollToImage("img6")}
        />
      </div>
    </div>
  );
};

export default SlideComp;