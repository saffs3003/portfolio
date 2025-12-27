function TechStack(props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(224, 222, 147, 0.52)",

        width: "fit-content",
        padding: "6px",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          color: " rgba(249, 245, 10, 1)",
          textShadow: "1px 1px 3px rgba(22, 22, 13, 1))",
          fontSize: "small",
        }}
      >
        {props.tech}
      </p>
    </div>
  );
}

export default TechStack;
