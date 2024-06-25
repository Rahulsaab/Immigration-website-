
import { Carousel } from "flowbite-react";

export function Imgscroll() {
  return (
    <>
    <div className="crousel" style={{height:"33rem"}} >
      <Carousel  leftControl="." rightControl="." slideInterval={2000} >
        <img src="pexels-rdne-7310015.jpg" alt="..." />
        <img src="pexels-dariabuntaria-5023107.jpg" alt="..." />
        <img src="pexels-tima-miroshnichenko-7009465.jpg" alt="..." />
        <img src="pexels-bhabin-tamang-169332034-14676984.jpg" alt="..." />
      </Carousel>
    </div>
    <div className="crousel2" style={{height:"21rem"}} >
      <Carousel slideInterval={2000}>
        <img src="pexels-rdne-7310015.jpg" alt="..." />
        <img src="pexels-dariabuntaria-5023107.jpg" alt="..." />
        <img src="pexels-tima-miroshnichenko-7009465.jpg" alt="..." />
        <img src="pexels-bhabin-tamang-169332034-14676984.jpg" alt="..." />
      </Carousel>
    </div>
    </>
  );
}


