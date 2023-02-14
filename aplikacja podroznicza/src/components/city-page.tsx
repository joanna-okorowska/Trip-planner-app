import { Rating } from "react-simple-star-rating";
import {
  PageContainer,
  Global,
  Logo,
  LogoContainer,
  LogoImg,
  ImageContainer,
  Txt,
  Param,
  TxtContainer,
  DrpContainer,
  Img,
  ImgContainer,
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

export function CityPage() {
  return (
    <PageContainer>
      <Global />
      <LogoContainer>
        <LogoImg src="src/assets/triptastic.png"></LogoImg>
        <Logo>TripTastic</Logo>
      </LogoContainer>
      <ImageContainer src="src/assets/city page/panoramic.jpg"></ImageContainer>
      <TxtContainer>
        <Txt>Funchal</Txt>
        <Param>
          Funchal is the capital of Madeira and the most populous out of the
          Portuguese mainland. The city encompasses an area of 76.15 km² and has
          111,892 inhabitants (2011), subdivided into 10 parishes. The view of
          Funchal is magnificent, with its crooked streets that go down the
          mountain side, and in front of the blue sea. This breath-taking
          landscape has captivated visitors from around the world. The city
          gained its name from the impressive amount of fennel (funcho in the
          Portuguese language) growing in this valley, and that led João
          Goncalves Zarco, who arrived here in 1420, to award it the name
          Funchal. <br />
          The climate is subtropical, with mild temperatures throughout the
          year. However, the landscape resembles that of a Mediterranean country
          than the tropics. <br />
          Seen from afar, Funchal is also a sea of colourful vegetation,
          dominated by shades of pink bougainvillea, purple jacaranda trees and
          the spectacular trees with shades of red that line the roads.
          <br />
          The streets branch out from the polarizing centre, the Cathedral,
          built by King Manuel I. In downtown, the old town, we highlight
          several churches and the eighteenth and nineteenth century houses. The
          flowers and fruit markets in the main squares of the city are
          characteristic aspects of Funchal, not forgetting the toboggans that
          descend steeply from Monte to Funchal on a steep descent, directed by
          skilled men, the so-called “carreiros”. Funchal is not only an ancient
          city. Without losing its pristine beauty, many new buildings gave rise
          to big hotels, shops and other attractions addressing the needs of
          modern tourism.
        </Param>
      </TxtContainer>
      <DrpContainer>
        <Txt>Attractions</Txt>
        <ImgContainer>
          <IslandCnt>
            <Img src="src/assets/city page/1.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Monte Palace Madeira</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/2.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Farmers' Market</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/3.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Jardim Botânico da Madeira</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/4.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Teleféricos do Funchal</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/5.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>CR7 Cristiano Ronaldo Museum</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
        </ImgContainer>
        <ImgContainer>
          <IslandCnt>
            <Img src="src/assets/city page/6.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Funchal Cathedral</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/7.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Blandy's Wine Lodge </TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/8.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Santa Catarina Park </TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/9.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Forteresse de Santiago</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/10.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Igreja de Nossa Senhora do Monte</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
        </ImgContainer>
        <ImgContainer>
          <IslandCnt>
            <Img src="src/assets/city page/11.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Museu Quinta das Cruzes</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/12.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Madeira Story Centre</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/13.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Rua de Santa Maria</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/14.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Casino da Madeira</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/15.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Pico do Barcelos</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
        </ImgContainer>
        <ImgContainer>
          <IslandCnt>
            <Img src="src/assets/city page/16.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Pico do Barcelos</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/17.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>House Museum of Frederico de Freitas</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/18.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Convento de Santa Clara</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/19.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Jesuit College of Funchal</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
          <IslandCnt>
            <Img src="src/assets/city page/20.jpg" />
            <AttractionCard>
              <AttractionInfo>
                <TxtIld>Fortaleza de São João Baptista do Pico</TxtIld>
                <ParamIld>
                  <CityPageRating />
                </ParamIld>
              </AttractionInfo>
              <Input placeholder="Add a comment..." />
            </AttractionCard>
          </IslandCnt>
        </ImgContainer>
      </DrpContainer>
    </PageContainer>
  );
}
