import "./index.css";

export const NumberCard = ({ number, title, color, background, ...props }) => {
  return (
    <div
      {...props}
      className="number-card"
      style={{
        background,
      }}
    >
      <p>{title}</p>
      <p
        style={{
          color,
        }}
      >
        {number}
      </p>
    </div>
  );
};
