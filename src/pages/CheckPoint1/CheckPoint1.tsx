
import useMultiStepFormStore from "@/store/Zustand/Store";
import { IoArrowForward } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";

export default function CheckPoint1() {
  const { resetStore } = useMultiStepFormStore();
  const {id}=useParams()

  const navigat = useNavigate()
  const handelClick = () => {
    resetStore();
    navigat(`/MultiStepForm${id}`)

  }
  return (
    <main className="wait-page">
      <h2>You have finished this step,<br /> now continue to the next step.</h2>
      <div className="buttons">
        <button>Contact support team</button>
        <button type="button" onClick={handelClick}>
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </div>
    </main>
  )
}