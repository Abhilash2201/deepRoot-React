const Sidebar = ({ name }) => {
  console.log("sidebar");

  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Sidebar</h1>
      <h2> {name}</h2>
    </div>
  );
};
export default Sidebar;
