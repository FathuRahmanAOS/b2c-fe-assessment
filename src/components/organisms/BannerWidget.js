import React, { Fragment, useEffect, useState } from "react";
import SliderContent from "../molecules/SliderContent";
import Dots from "../atoms/Dots"
import Arrows from "../atoms/Arrows";
import sliderImage from "./sliderImage";
import WidgetData from "../WidgetData";
import "./slider.css";

//redux needed
import { useDispatch, useSelector } from "react-redux";
import {
  doGetWidgetRequest,
} from "../../store/widget/actions";

const len = sliderImage.length - 1;

function BannerWidget(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

 const dispatch = useDispatch();
  const { widgetData } = useSelector((state) => state.widgetState);

  useEffect(() => {
    dispatch(doGetWidgetRequest());
  }, []);

  console.log("Ini adalah data Widget ", widgetData);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        sliderImage={widgetData[3].sliderImageData}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default BannerWidget;
