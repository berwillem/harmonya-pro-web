import { IoArrowBack } from "react-icons/io5";
import "./TopStep.css"
export default function TopStep({ prog }: { prog: string }) {
  const handleClick = () => {
    window.history.back();
  }

  return (
    <div className="top-step">
      <div className="content-top-step">
        <div className="back" onClick={handleClick}>
          <IoArrowBack />
        </div>
        <div className="text-logo">
          Harmonya
        </div>
        <span>
        </span>
      </div>

      <ul className="infos-confimation">
        <li>coiffure home</li>
        <li>1400 DZD</li>
        <li> <span></span></li>
        <li>category</li>
      </ul>

      <div className="step">
        <div className="progresse" style={{ width: prog }}>

        </div>
      </div>

    </div>
  )
}