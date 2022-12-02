import * as S from "./stream.styles";
import { PopularProps } from "./stream.types";
import { v4 as uuidv } from "uuid";
import { IMAGE_BASE_URL } from "../../../../common/config";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function StreamUI({ tvPopular }: PopularProps) {
  const progressPercentage = (percent) => {
    if (percent <= 3) {
      return "rgba(225, 76, 48)";
    } else if (percent <= 7) {
      return "rgba(255, 227, 2)";
    } else if (percent <= 10) {
      return "rgba(18, 217, 0)";
    }
  };

  return (
    <S.DataWrapper>
      {tvPopular.map((el: any) => (
        <S.InnerWrapper key={uuidv()}>
          <S.DataImage src={`${IMAGE_BASE_URL}/w500${el.poster_path}`} />
          <S.ProgressBar>
            <CircularProgressbar
              value={el.vote_average * 10}
              text={`${el.vote_average * 10}%`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "butt",
                textSize: "32px",
                pathTransitionDuration: 0.5,
                pathColor: progressPercentage(el.vote_average),
                textColor: "#fff",
                trailColor: "#d6d6d6",
              })}
            />
          </S.ProgressBar>
          <S.DataName>{el.name}</S.DataName>
          <S.DataDate>{el.first_air_date}</S.DataDate>
        </S.InnerWrapper>
      ))}
    </S.DataWrapper>
  );
}
