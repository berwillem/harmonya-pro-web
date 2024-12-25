import { LinearProgress } from "@mui/material";
import "./Abonnements.css";
import Table from "@/components/Table/Table";
import MiniNav from "@/components/MiniNav/MiniNav";
export default function Abonnements() {
  const tableHeaders = [
    "#",
    "Nom",
    "Prix",
    "Date d'achat",
    "Date d'expiration",
    "Status",
  ];

  const tableData = [
    [
      { text: "01" },
      { text: "Wassim mahmoud" },
      { text: "30$" },
      { text: "24 nov 2024" },
      { text: "23 Déc 2024" },
      { text: "Payé" },
    ],
    [
      { text: "02" },
      { text: "Taissir Alem" },
      { text: "30$" },
      { text: "24 nov 2024" },
      { text: "23 Déc 2024" },
      { text: "A venir" },
    ],
    [
      { text: "03" },
      { text: "Walim Berchiche" },
      { text: "30$" },
      { text: "24 nov 2024" },
      { text: "23 Déc 2024" },
      { text: "Annulé" },
    ],
  ];

  return (
    <>
      <div className="abonnements-page">
        <div className="first-card">
          <div className="first-card-content">
            <div className="first-card-titles">
              <h1>Plan actuel</h1>
              <h2 className="plan">
                Votre plan actuel est <span>GOLD</span>
              </h2>
              <h3>Le meilleur pack de la liste yohooo !</h3>
              <h2>
                Actif jusqu'au <span> 09 décembre 2021</span>
              </h2>
              <h3>
                Nous vous enverrons une notification à l'expiration de
                l'abonnement
              </h3>
              <h2>
                <span>$40 </span>Par mois
              </h2>
              <h3>Plan standard pour les grande entreprises</h3>
            </div>
            <div className="first-card-alert">
              <h1>We need your attention!</h1>
              <p>
                Une fois que vous avez supprimé votre compte, vous ne pouvez
                plus revenir en arrière. Soyez sûr de vous.
              </p>
            </div>
          </div>
          <div className="first-card-buttons">
            <div className="first-card-button">
              <button>Améliorer l'abonnement</button>
              <button>Annuler</button>
            </div>
            <div className="first-card-bar">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <h1>Jours</h1>
                  <h1>
                    <span>12 </span>
                    Jours sur 30
                  </h1>
                </div>
                <LinearProgress variant="determinate" value={38} />
                <p style={{ marginTop: "10px" }}>
                  <span>18 </span>
                  days remaining until your plan requires update
                </p>
              </div>
            </div>
          </div>
        </div>
        <Table
          title="Historique de la facturation"
          onOptionChange={(selectedOption) => console.log(selectedOption)}
          tr={tableHeaders}
          td={tableData}
        ></Table>
      </div>
    </>
  );
}
