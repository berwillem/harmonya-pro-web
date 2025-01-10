import { Avatar } from "@mui/material";
import image from "../../assets/login.jpeg"
import bronz from "../../assets/bronz.png"
import "./BoutiqueCard.css"
import { FaArrowRight } from "react-icons/fa";
export default function BoutiqueCard() {
  return (

    <div className="card-boutique">
      <img className="sub-icon" src={bronz} alt="bronz" />
      <div className="avatar">
        <Avatar alt="avatar" src={image} sx={{ width: 50, height: 50 }} />
        <div className="info">
          <h2>Nom de la boutique</h2>
          <p>Nom responsable</p>
        </div>
      </div>
      <div className="button-boutique">
        <FaArrowRight />

      </div>

    </div>
  )
}