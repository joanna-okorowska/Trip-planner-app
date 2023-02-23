import {
  Background,
  Photo,
  Title,
  Description,
  Container,
  TextArea,
  Duration,
} from "../Styles/VenuesModal-styled";

export function VenuesModal() {
  return (
    <Background>
      <Container>
        <Photo />
        <TextArea>
          <Title>Pico do Ariero</Title>
          <Description>
            Pico do Arieiro is the 3rd highest peak in Madeira at 1,818m above
            sea level, and Pico Ruivo is a whopping 1,862m high and is the
            highest peak on the island. This hike offers insane views of
            Madeira’s beautiful mountains and rocky volcanic landscape along the
            whole trail.
          </Description>
          <Duration>Duration: 7h</Duration>
        </TextArea>
      </Container>
    </Background>
  );
}
