import PropTypes from "prop-types";
import { Carousel } from "antd";

function onChange() {
  // console.log("Slide changed:", currentSlide);
}

function Slider(props) {
  const contentStyle = {
    height: "80vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000} afterChange={onChange}>
        {props.arrImages.map((image, index) => (
          <div key={index}>
            <div style={contentStyle}>
              <img
                className=" flex flex-col items-center justify-center object-cover w-[80%]"
                src={image}
                alt={`Slider ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
      <span className="text-[28px] font-[600] flex justify-center">“Học, học nữa, học mãi”</span>
      <br />
      <span className="text-[28px] font-[600] flex justify-center">- Lenin</span>
    </div>
  );
}

Slider.propTypes = {
  arrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
