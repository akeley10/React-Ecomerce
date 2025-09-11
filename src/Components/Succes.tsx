import Lottie from "lottie-react";
import successAnimation from "../assets/success.json"

export default function Success() {
  return (
    <div className="w-80 h-80">
      <Lottie 
        animationData={successAnimation} 
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
