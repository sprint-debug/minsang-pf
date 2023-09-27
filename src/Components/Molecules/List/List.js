import "./List.css";
const List = ({ item }) => {
  console.log(item);
  return (
    <ul className="list-default">
      {item.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default List;
