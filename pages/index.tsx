import Home from "../src/components/unit/home/home.container";
import PopularPage from "../src/components/unit/popular";
import FreeWatch from "../src/components/unit/freeWatch";

export default function HomePage() {
  return (
    <>
      <Home />
      <PopularPage />
      <FreeWatch />
    </>
  );
}
