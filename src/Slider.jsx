import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { dataList } from "./data";

const Slider = () => {
  const [data, setData] = useState(dataList);
  console.log(data);

  const [index, setIndex] = useState(0);
  console.log(index);

  const item = data[index];

  const handleNext = () => {
    setIndex((prev) => {
      return (prev = (prev + 1) % dataList.length);
    });
  };

  const handlePrev = () => {
    setIndex((prev) => {
      console.log("Hii");
      return (prev = prev - 1 < 0 ? dataList.length - 1 : prev - 1);
    });
  };

const autoSlide = ()=>{

    handleNext()
}


useEffect(()=>{

    const intervalId =  setInterval(autoSlide, 5000)
    return () => {
        clearInterval(intervalId);
      };
},[])


  return (
    <section className="section">
      <article key={item.id}>
        <img src={item.image} alt={item.name} className="person-img" />
        <h5>{item.name}</h5>
        <p className="title">{item.title}</p>
        <p className="text">{item.quote}</p>
        <FaQuoteRight />
      </article>

      <button onClick={handlePrev} className="prev">
        <FaChevronLeft />
      </button>
      <button onClick={handleNext} className="next">
        <FaChevronRight />
      </button>
    </section>
  );
};

export default Slider;
