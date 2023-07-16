import { CrossIcon } from "@/external/externalComponents";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

export default function SearchButtons({ emptySearchBar }) {
  return (
    <div className="flex flex-row gap-x-5 absolute top-1/2 -translate-y-1/2 right-0">
      <DeleteButton emptySearchBar={emptySearchBar} />
      <Link
        href={"/productions"}
        className=""
      >
        <CrossIcon />
      </Link>
    </div>
  );
}
