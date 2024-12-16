import { IoArrowBack } from "react-icons/io5";
import "./TopStep.css"
export default function TopStep({ prog }: { prog: string }) {

  return (
    <div className="top-step">
      <div className="content-top-step">
        <div className="back">
          <IoArrowBack />
        </div>
        <div className="text-logo">
          Harmonya
        </div>
        <span>

        </span>
      </div>
      <div className="step">
        <div className="progresse" style={{width:prog}}>

        </div>
      </div>

    </div>
  )
}