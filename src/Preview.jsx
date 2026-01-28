const Preview = ({ value, setValue }) => {
  return (
    <>
      <div style={{ background: "aqua", fontSize: "14px", padding: "10px" }}>
        {value}
      </div>
      <div
        style={{ background: "red", fontSize: "14px", padding: "10px" }}
        onClick={() => setValue(value + 2)}
      >
        +2
      </div>
    </>
  );
};

export default Preview;
