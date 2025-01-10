import BoutiqueCard from "@/components/BoutiqueCard/BoutiqueCard";
import "./Boutique.css"

export default function Boutique() {
  return (
    <main className="boutique">
      <div className="grid-boutique">
        <BoutiqueCard />
        <BoutiqueCard />
        <BoutiqueCard />
        <BoutiqueCard />
      </div>

      <div className="add-boutique-button">
        <button className="boutique-button">Créé une nouvelle boutique</button>
      </div>
    </main>

  )
}
