import { useEffect, useState } from "react";
import TvUI from "./tv.presenter";
import { tvApi } from "../../../../api";

export default function Tv() {
  const [onAir, setOnAir] = useState([]);

  const handleOnAirData = async () => {
    try {
      await tvApi.onAirTv.then((response) => setOnAir(response.data.results));
    } catch (error) {
      console.log("TV onAir error:", error.message);
    }
  };

  useEffect(() => {
    handleOnAirData();
  }, []);

  return <TvUI onAir={onAir} />;
}
