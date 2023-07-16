'use client';

import SearchResults from "@/app/search/components/SearchResults";
import SearchBar from '@/app/search/components/SearchBar';
import useSearching from "@/app/search/hooks/useSearching";

export default function SearchPage() {
  const [search, setSearch] = useSearching()

  return (
    <div className="text-white flex flex-col items-center animate-fade-up">
      <SearchBar search={search} setSearch={setSearch}  />
      <SearchResults search={search} />
    </div>
  );
}