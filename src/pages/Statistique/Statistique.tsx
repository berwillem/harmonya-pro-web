import Table from "@/components/Table/Table";
import { FaCalendarAlt, FaEllipsisV } from "react-icons/fa";
import "./Statistique.css"
import bronz from "../../assets/bronz.png"
import { LineChart } from '@mui/x-charts/LineChart';
export default function Statistique() {
  const tableHeaders = [
    "Nom du client",
    "Téléphone",
    "Email",
    "Service",
    "Date",
    "Heure",
    "Action",
  ];

  const tableData = [
    [
      { text: "Wassim hamoudi" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },
      { text: "10h00 am" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/1",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "Mahmoud Wassim" },
      { text: "+213 554 96 93 57" },
      { text: "mahmoud@gmail.com" },
      { text: "Coiffure femme" },
      { text: "24 Déc 2024" },
      { text: "02h00 pm" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/2",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "WALIM" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },
      { text: "10h00 am" },
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/3",
            type: "pop",
          },
        ],
      },
    ],
  ];

  const actions = [
    {
      text: "Voir les détails",
      icon: FaCalendarAlt,
      onClick: (id: any) => console.log(`Viewing details for ${id}`),
    },
    {
      text: "Annuler la réservation",
      icon: FaEllipsisV,
      onClick: (id: any) => console.log(`Cancelling reservation ${id}`),
    },
  ];
  return (
    <main className="statistique" >
      <div className="stat-header">
        <div className="stat-infos">
          <div className="subscription-stat">
            <div className="image">
              <img src={bronz} alt="bronz" />
            </div>
            <p>Valable jusqu’au 02 / 10 / 2025</p>
          </div>
          <div className="nbr-stat">
            <div className="card-stat">
              <h3>Visite des boutique</h3>
              <p>120</p>
            </div>
            <div className="card-stat">
              <h3>Publication
                sauvegarder</h3>
              <p>03</p>
            </div>
          </div>
        </div>
        <div className="chart">
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
    
      height={300}
    />

        </div>
      </div>
      <Table
        title="Mes Services"
        selectOptions={["Binnovant store", "Option 2"]}
        onOptionChange={(selectedOption) => console.log(selectedOption)}
        tr={tableHeaders}
        td={tableData}
        action={actions}
      ></Table></main>
  )
}