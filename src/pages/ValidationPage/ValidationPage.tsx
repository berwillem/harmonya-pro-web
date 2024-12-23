import { IoArrowForward } from "react-icons/io5";
import "./ValidationPage.css"
export default function ValidationPage() {
  return (
    <main className="wait-page">
      <h2>Your account is awaiting validation and a message <br /> will be sent to you as soon as possible.</h2>
      <div className="buttons">
        <button>Contact support team</button>
        <button type="button">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </div>
    </main>
  )
}