import DetailUI from "./detail.presenter";
import { GlobalContext } from "../../../../pages/_app";
import { useContext } from "react";
import { DetailProps } from "./detail.types";

export default function Detail() {
  const { data }: DetailProps = useContext(GlobalContext);

  return <DetailUI data={data} />;
}
