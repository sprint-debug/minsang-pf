import "./Layout.css";

const Layout = ({ children, split }) => {
  const baseClass = "split";
  const className = split ? `${baseClass} ${baseClass}-${split}` : baseClass;
  return (
    // <article class="layout-grid">{children}</article>
    <article className={className}>{children}</article>
  );
};

export default Layout;
