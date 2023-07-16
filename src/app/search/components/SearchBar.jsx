import { CrossIcon, Link } from "@/external/externalComponents";
import DeleteButton from "./DeleteButton";
import SearchButtons from "./SearchButtons";
import SearchForm from "./SearchForm";

export default function SearchBar({ search = "", setSearch }) {
  const { emptySearchBar } = setSearch;

  return (
    <div className="relative">
      <SearchForm search={search} setSearch={setSearch} />
      <SearchButtons emptySearchBar={emptySearchBar} />
    </div>
  );
}
