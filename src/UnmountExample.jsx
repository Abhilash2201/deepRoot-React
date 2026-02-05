import { useEffect } from "react";

function ResizeComponent() {
  useEffect(() => {
    console.log("component mount");

    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      console.log("Component unmounted");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h2>Resize Component</h2>;
}
export default ResizeComponent;
