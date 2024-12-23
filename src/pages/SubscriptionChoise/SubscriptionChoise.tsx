import CardSubsciptions from "@/components/CardSubsciptions/CardSubsciptions";
import TopStep from "@/components/TopStep/TopStep";
import "./SubscriptionChoise.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SubscriptionChoise() {
  const [toogle, setToogle] = useState(false)

  return (
    <main className="subscription-choise">
      <TopStep prog="0%" />
      <div className="container">
        <div className="Title-button">
          <h2>Upgrade as your brand grow</h2>
          <div className="toogle-button">
            <span onClick={() => setToogle(false)} className={toogle ? "toggle-button-span " : "toggle-button-span active "}>Monthly</span>
            <span onClick={() => setToogle(true)} className={toogle ? "toggle-button-span active " : "toggle-button-span "}>Yearly</span>

          </div>

        </div>
        <div className="row" >

          <CardSubsciptions />
          <CardSubsciptions />
          <CardSubsciptions />
        </div>
      </div>
    </main>
  )
}