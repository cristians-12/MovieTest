import useAppStore from "@/store/appStore";
import { useState } from "react";

const useNavbar = () => {
  const [pop, setPop] = useState(false);
  const { changeUrl } = useAppStore();

  const handlePop = () => {
    setPop(!pop);
  };
  const handlePopular = () => {
    changeUrl(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
    );
  };

  return {
    handlePop,
    pop,
    handlePopular,
  };
};

export default useNavbar;
