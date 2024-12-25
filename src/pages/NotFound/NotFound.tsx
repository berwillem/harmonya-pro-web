import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./NotFound.css"
export default function NotFound() {
  return (
    <main className="wait-page not-found">

      <h2>Vous avez perdu votre chemain<br /><span>404</span></h2>
      <div className="buttons">
        <Link to="/">
          <button type="button" style={{ backgroundColor: "black" }}>
            <span>Back Home</span>
            <IoArrowForward />
          </button>
        </Link>
      </div>
    </main>
  )
}