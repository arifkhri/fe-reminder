import { Tag} from "antd";
function TagBlue(props) {
  const { label } = props;

  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Tag color="blue" onMouseDown={onPreventMouseDown}>
      {label}
    </Tag>
  );
}

export default TagBlue;