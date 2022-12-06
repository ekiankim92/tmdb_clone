import * as S from "./detail.styles";
import { IMAGE_BASE_URL } from "../../../common/config";
import { runTime } from "../../../common/libraries/utils";

export default function DetailUI({ data }) {
  /* eslint-disable camelcase */
  const {
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    backdrop_path,
    runtime,
    genres,
    tagline,
  } = data;

  console.log("data:", data);

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
          <S.TitleLabel>{title}</S.TitleLabel>
          <S.YearLabel>({release_date?.slice(0, 4)})</S.YearLabel>
          <S.Date>{release_date}</S.Date>
          <div>{vote_average}</div>
          <S.RuntimeLabel>{runTime(runtime)}</S.RuntimeLabel>
          {genres?.map((el) => (
            <S.GenresLabel key={el.id}>{el.name}</S.GenresLabel>
          ))}
          <S.TaglineLabel>{tagline}</S.TaglineLabel>
          <S.OverviewLabel>{overview}</S.OverviewLabel>
        </S.InfoWrapper>
      </S.DetailWrapper>
    </S.Wrapper>
  );
}
