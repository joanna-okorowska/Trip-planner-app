import { Rating } from "react-simple-star-rating";
import {
  Img,
  IslandCnt,
  TxtIld,
  ParamIld,
  Input,
  AttractionCard,
  AttractionInfo,
} from "../Styles/city-page.styled";

const CityPageRating = () => {
  return <Rating size={20} />;
};

export function CityPageAtr({
  name,
  imgUrl,
}: {
  name: string;
  imgUrl: string;
}) {
  return (
    <IslandCnt>
      <Img src={imgUrl} />
      <AttractionCard>
        <AttractionInfo>
          <TxtIld>{name}</TxtIld>
          <ParamIld>
            <CityPageRating />
          </ParamIld>
        </AttractionInfo>
        <Input placeholder="Add a comment..." />
      </AttractionCard>
    </IslandCnt>
  );
}
