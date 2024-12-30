import { useNavigate } from "react-router-dom"
import bronz from "../../assets/bronz.png"
import "./CardSubsciptions.css"
export default function CardSubsciptions() {
  const navigat = useNavigate()
  const handelClick = () => {

    navigat("/CheckPoint/1")

  }
  return (
    <div className="card-subsciptions" onClick={handelClick}>
      <div className="image">
        <img src={bronz} alt="bronz" />
      </div>

    </div>
  )
}