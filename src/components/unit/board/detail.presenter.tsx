import * as S from "./detail.styles";
import { IMAGE_BASE_URL } from "../../../common/config";

export default function DetailUI({ data }) {
  console.log("movieDetail:", data);
  console.log("data.title:", data.title);

  /* eslint-disable camelcase */
  const {
    overview,
    poster_path,
    release_data,
    title,
    vote_average,
    backdrop_path,
  } = data;

  return (
    <S.Wrapper>
      <S.BackgroundWrapper
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}/w500${backdrop_path})`,
        }}
      ></S.BackgroundWrapper>
      <S.DetailWrapper>
        <S.Img src={`${IMAGE_BASE_URL}/w500/${poster_path}`} />
        <S.InfoWrapper>
          <span>{title}</span>
          <span>{release_data}</span>
          <div>{vote_average}</div>
          <div>{overview}</div>
        </S.InfoWrapper>
      </S.DetailWrapper>
    </S.Wrapper>
  );
}
