import { CardDescription, CardTitle, Wrapper } from "./motivation-card-style";
import { GiBiceps } from "react-icons/gi";

export const MotivationCard = () => {
  return (
    <Wrapper>
      <GiBiceps size={80} />
      <CardTitle>Treino</CardTitle>
      <CardDescription>Lorem ipsum dolor, sit amet consectetur</CardDescription>
    </Wrapper>
  );
};
