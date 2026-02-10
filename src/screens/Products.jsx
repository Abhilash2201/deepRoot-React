import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Products Page</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {users.map((data) => {
          return (
            <div
              style={{ border: "1px solid", padding: "8px" }}
              onClick={() => {
                navigate(`/product/${data.id}`, {
                  state: data,
                });
              }}
            >
              <p>username:{data.username}</p>
              <p>website:{data.website}</p>
              <p>adress:{data.address.street}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Products;
