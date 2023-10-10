import "./Icon.css";

const Icon = ({ icon, alt }) => {
  return <img src={icon} alt={alt || "icon"} />;
};

export default Icon;
