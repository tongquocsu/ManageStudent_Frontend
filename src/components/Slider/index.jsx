import { Carousel } from "antd";
import image from "../../assets/slider/slider.png";

function onChange() {
  // console.log("Slide changed:", currentSlide);
}

function Slider() {
  const contentStyle = {
    height: "90vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    
  };
  const arrImages = [image, image, image];
  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000} afterChange={onChange}>
        {arrImages.map((image, index) => (
          <div key={index}>
            <div style={contentStyle}>
              <img
                className="img-slider"
                src={image}
                alt={`Slider ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
