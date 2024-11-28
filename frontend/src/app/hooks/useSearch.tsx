import useAppStore from "@/store/appStore";
import { useState } from "react";

const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  const { changeUrl, changeGenre, genre } = useAppStore();

  const handleSearch = () => {
    changeUrl(`https://api.themoviedb.org/3/search/movie?query=${query}`);
    changeGenre({ ...genre, tag: query });
  };
  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value == "" || e.target.value.trim == null) {
      changeUrl(`https://api.themoviedb.org/3/movie/popular?language=en-US`);
    } else {
      setQuery(e.target.value);
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      handleSearch();
    }
  };

  return {
    handleQuery,
    handleSearch,
    handleKeydown,
  };
};

export default useSearch;
