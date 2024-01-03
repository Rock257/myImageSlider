import "./slider.css";
import { useEffect, useState } from "react";
import { data } from "./data";

export const Slider = () => {
  const [imageDataIndex, setImageDataIndex] = useState(0);

  function handleNext() {
    setImageDataIndex((imageDataIndex + 1) % data.length);
  }
  // logic for above  code
  //   console.log(1%5)
  // console.log(2%5)
  // console.log(3%5)
  // console.log(4%5)
  // console.log(5%5)
  // output [1,2,3,4,0]

  function handlePrev() {
    // if (imageDataIndex === 0) setImageDataIndex(data.length - 1);
    // else setImageDataIndex(imageDataIndex - 1);
    // else we can write also
    // setImageDataIndex(!imageDataIndex ? data.length - 1 : imageDataIndex - 1);
    setImageDataIndex(imageDataIndex ? imageDataIndex - 1 : data.length - 1);
  }

  useEffect(() => {
    const timer = setTimeout(handleNext, 11000);
    // to manage exact timeout cycle
    return () => {
      clearTimeout(timer);
    };
  }, [imageDataIndex]);

  return (
    <div className="slider">
      <button className="btn" onClick={handlePrev}>
        Previous
      </button>

      {/* <img src={data[imageDataIndex]} alt="" className="img" /> */}
      {/* the above code everytime network call for rendering the image  */}

      {data.map((url, i) => {
        url = (
          <img
            src={url}
            alt="wallpaper"
            // key should always be unique
            key={url}
            className={imageDataIndex === i ? "img" : "hidden"}
          />
        );
        return url;
      })}

      {/* {data.map((url, i) => (
        <img
          key={url}
          src={url}
          className={imageDataIndex === i ? "img" : "hidden"}
          alt="wallpaper"
        />
      ))} */}

      <button className="btn" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};
