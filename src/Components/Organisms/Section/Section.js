import "./Section.css";

const Section = ({ children, title, data, innerWrapper = false }) => {
  const baseClass = "section";
  const className = title ? `${baseClass} ${baseClass}-${title}` : baseClass;

  const renderContent = () => (
    <>
      <h2 className="section-title">{title}</h2>
      {data && <p className="section-subtitle">{data}</p>}
      {children}
    </>
  );

  return (
    <section className={className}>
      {innerWrapper ? (
        <div className="section-inner">{renderContent()}</div>
      ) : (
        renderContent()
      )}
    </section>
  );
};

export default Section;
