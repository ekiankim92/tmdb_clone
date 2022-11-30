import * as S from "./popular.styles";
import { PopularProps } from "./populuar.types";

// prettier-ignore
export default function PopularUI({ isSelected, onClickStream, onClickTV, onClickRent, onClickTheaters }: PopularProps) {
  const { stream, TV, rent, theaters } = isSelected;

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.Title>What&apos;s Popular</S.Title>
        <S.RadioWrapper>
          <S.StreamLabel onClick={onClickStream} stream={stream}>Streaming</S.StreamLabel>
          <S.TVLabel onClick={onClickTV} TV={TV}>On TV</S.TVLabel>
          <S.RentLabel onClick={onClickRent} rent={rent}>For Rent</S.RentLabel>
          <S.TheatersLabel onClick={onClickTheaters} theaters={theaters}>In Theaters</S.TheatersLabel>
        </S.RadioWrapper>
      </S.TitleWrapper>
    </S.Wrapper>
  );
}
