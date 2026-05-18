import { Link } from "react-router-dom";
export function Back() {
  return (
    <>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}
