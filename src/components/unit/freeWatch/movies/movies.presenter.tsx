import * as S from "./movies.styles";
import { MovieProps } from "./movies.types";
import { v4 as uuidv } from "uuid";
import { IMAGE_BASE_URL } from "../../../../common/config";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { progressPercentage } from "../../../../common/libraries/percent";

export default function MovieUI({ moviesList, onClickDetail }: MovieProps) {
  return (
    <S.DataWrapper>
      {moviesList.map((el: any) => (
        <S.InnerWrapper key={uuidv()}>
          <S.DataImage
            src={`${IMAGE_BASE_URL}/w500${el.poster_path}`}
            onClick={() => onClickDetail(el.id)}
          />
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
          <S.DataName>{el.title}</S.DataName>
          <S.DataDate>{el.release_date}</S.DataDate>
        </S.InnerWrapper>
      ))}
    </S.DataWrapper>
  );
}
