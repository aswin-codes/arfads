import { useRef, useEffect } from "react";
import webGLFluidEnhanced from "webgl-fluid-enhanced";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Review from "./components/Review";
import Info from "./components/Info";
import Apply from "./components/Apply";
import Support from "./components/Support";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      webGLFluidEnhanced.simulation(canvas, {
        DENSITY_DISSIPATION: 0.8,
        PRESSURE_ITERATIONS: 30,
        SPLAT_RADIUS: 0.05,
       BACK_COLOR: "rgb(13, 5, 31)",
  
      });
    }

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
    
      webGLFluidEnhanced.splat(x, y, 10, 20);
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    // return () => {
    //   document.body.removeEventListener("mousemove", handleMouseMove);
    // };
  }, []);

  return (
    <div className="relative w-full h-screen bg-bgpri font-sora">
      <canvas
        ref={canvasRef}
        className="absolute bg-bgpri top-0 left-0 w-full h-full"
      ></canvas>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center overflow-y-auto ">
        <div className="max-w-[1440px] w-full ">
          <Navbar />
          <Home />
          <Review />
          <Info />
          <Apply/>
          <Support/>
          <Features/>          
        </div>
        <Footer/>
      </div>
    </div>
  );
}
