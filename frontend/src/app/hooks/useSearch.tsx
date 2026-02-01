import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { searchMoviesAction } from "@/lib/actions";

const useSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) {
      params.set("query", query);
      params.set("page", "1");
    } else {
      params.delete("query");
    }
    router.push(`/?${params.toString()}`);
  };

  const handleQuickSearch = async () => {
    if (!query.trim()) return;
    
    const response = await searchMoviesAction(query);
    if (response.success) {
      setResults(response.data.results);
      console.log("Resultados obtenidos vía Server Action:", response.data.results);
    }
  };

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return { 
    handleQuery, 
    handleSearch, 
    handleKeydown, 
    handleQuickSearch,
    results 
  };
};

export default useSearch;