import Item from "./Types/Item";
import { Name } from "./Styles";
import { useNavigate } from "react-router-dom";
import { Card } from "../../../Styles/ShopByCategories";

type Props = {
  item: Item;
};

const SliderCard = ({ item }: Props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/shop/?category=${item.name}`);
  };

  return (
    <Card onClick={clickHandler}>
      <img src={item.img} alt="category-img" />
      <Name>{item.name}</Name>
    </Card>
  );
};

export default SliderCard;
