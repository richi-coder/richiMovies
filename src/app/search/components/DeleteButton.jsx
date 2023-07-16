import { FaTrash } from "react-icons/fa";

export default function DeleteButton({ emptySearchBar }) {
  return (
    <button
        data-cy='deleteButton'
        onClick={emptySearchBar}
    >
        <FaTrash />
    </button>
  )
}
