import { useState, useEffect } from "react";
import StreamUI from "./stream.presenter";
import { tvApi } from "../../../../api";

export default function Stream() {
  const [tvPopular, setTvPopular] = useState([]);

  const handleData = async () => {
    try {
      await tvApi.popular.then((response) =>
        setTvPopular(response.data?.results)
      );
    } catch (error) {
      console.log("TV Popular Error:", error.message);
    }
  };

  useEffect(() => {
    handleData();
  });

  return <StreamUI tvPopular={tvPopular} />;
}
