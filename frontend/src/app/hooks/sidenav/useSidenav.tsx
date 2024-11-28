import useAppStore from "@/store/appStore";
import { Genre } from "@/types/movie/movie.type";
import { useState } from "react";

const useSidenav = () => {
  const [visible, setVisible] = useState(false);

  const { changeUrl, changeGenre } = useAppStore();

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handleTag = (genre: Genre) => {
    changeGenre(genre);
    changeUrl(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`
    );
  };

  return {
    visible,
    handleVisibility,
    handleTag,
  };
};

export default useSidenav;
