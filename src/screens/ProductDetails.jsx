import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const params = useParams();
  console.log(params);
  //   console.log(location);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserDetails(data);
      });
  }, []);

  return (
    <div>
      <h1>Product Details</h1>

      <div>
        <h2>userName : {userDetails.name}</h2>
        <h2>website : {userDetails.website}</h2>
        <h2>phone : {userDetails.phone}</h2>
        <h2>email : {userDetails.email}</h2>
      </div>
    </div>
  );
};
export default ProductDetails;
