import * as S from "./home.styles";
import { pictureArray } from "../../../common/images";
import { useCallback, useContext, useEffect } from "react";
import { GlobalContext } from "../../../../pages/_app";
import { GlobalProps } from "./home.types";

export default function HomeUI() {
  const randomIndex = Math.floor(Math.random() * pictureArray.length);
  const randomImages = pictureArray[randomIndex];
  const { setIsShow }: GlobalProps = useContext(GlobalContext);

  const onWheel = useCallback(() => {
    const { scrollY } = window;
    console.log("scrollY:", scrollY);
    if (scrollY >= 79) setIsShow((prev) => !prev);
  }, []);

  console.log("onWheel", onWheel);

  // useEffect(() => {
  //   window.addEventListener("wheel", onWheel, { passive: true });
  // }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let oldValue = 0;
      let newValue = 0;

      window.addEventListener("scroll", () => {
        newValue = window.scrollY;
        if (oldValue - newValue < 15) {
          setIsShow(false);
        } else if (oldValue - newValue > 0) {
          setIsShow(true);
        }
        oldValue = newValue;
      });
    }
  }, []);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const yAxis = window.scrollY;
  //     console.log(yAxis);
  //   }
  // });

  // const [position, setPosition] = useState(0);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     let moving = window.pageYOffset;

  //     setIsShow(position > moving);
  //     setPosition(moving);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <S.Wrapper>
      <S.IntroWrapper
        style={{
          backgroundImage: `url("${randomImages}")`,
        }}
      >
        <S.Title>Welcome.</S.Title>
        <S.Intro>
          Millions of movies, TV shows and people to discover. Explore now
        </S.Intro>
        <S.InputWrapper>
          <S.SearchInput placeholder="Search movies, TV shows, cast" />
          <S.SearchButton type="button" value="Search" />
        </S.InputWrapper>
      </S.IntroWrapper>
    </S.Wrapper>
  );
}
