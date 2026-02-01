import useAppStore from "@/store/appStore";
import { GenreType } from "@/types/movie/genre.type";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const useSidenav = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleVisibility = () => {
    setVisible(!visible);
  };

  const handleTag = (genre: GenreType) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1");
    params.set("genre", genre.id.toString());
    router.push(`/?${params.toString()}`);
    setVisible(!visible);
  };

  return {
    visible,
    handleVisibility,
    handleTag,
  };
};

export default useSidenav;
