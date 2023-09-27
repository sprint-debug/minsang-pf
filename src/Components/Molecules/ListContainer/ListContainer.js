import Icon from "../../Atoms/Icon/Icon";
import List from "../List/List";
import ListTitle from "../../Atoms/ListTitle/ListTitle";
import "./ListContainer.css";

const ListContainer = ({ data: { icon, title, skills } }) => {
  return (
    <div className="seciton-list">
      <Icon icon={icon} />
      <ListTitle title={title} />
      <List item={skills} />
    </div>
  );
};

export default ListContainer;
