import "./Gallery.css";

const Gallery = ({ data }) => {
  return (
    <ul className="list-gallery">
      {data.map((item) => (
        <li key={item.id} className="gallery-item">
          <h3 className="item-title">{item.title}</h3>
          <img src={item.url} alt={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
