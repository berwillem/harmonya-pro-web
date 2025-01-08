import "./MesReservations.css";
import Table from "../../components/Table/Table";
import { FaEllipsisV, FaCalendarAlt } from "react-icons/fa";
import CountCards from "@/components/CountCards/CountCards";

export default function MesReservations() {
  const tableHeaders = [
    "Nom du client",
    "Téléphone",
    "Email",
    "Service",
    "Date",
    "Heure",
    "Paiement",
    "Status du client",
    "Status de la réservation",
    "Action",
  ];

  const tableData = [
    [
      { text: "Walim Berchiche" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },
      { text: "10h00 am" },
      { text: "Visa" }, 
      { text: "Client normal" }, 
      { text: "Validé" }, 
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
      { text: "Cash" }, 
      { text: "VIP" }, 
      { text: "En attente" }, 
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
      { text: "Taissir" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },
      { text: "10h00 am" },
      { text: "El Dahabiya" }, 
      { text: "Client normal" }, 
      { text: "Annulé" }, 
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
    [
      { text: "Lalout Mehdi" },
      { text: "+213 554 96 93 57" },
      { text: "laloutme@gmail.com" },
      { text: "Coiffure homme" },
      { text: "23 Déc 2024" },
      { text: "10h00 am" },
      { text: "CIB" }, 
      { text: "Blacklisted" }, 
      { text: "Validé" }, 
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/4",
            type: "pop",
          },
        ],
      },
    ],
    [
      { text: "Mehdi Bensalem" },
      { text: "+213 664 77 22 33" },
      { text: "mehdi.bensalem@gmail.com" },
      { text: "Coiffure homme" },
      { text: "25 Déc 2024" },
      { text: "01h30 pm" },
      { text: "Visa" }, 
      { text: "VIP" }, 
      { text: "En attente" }, 
      {
        icons: [
          {
            icon: [FaEllipsisV],
            link: "/action/5",
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
    <>
      <div className="count-cards-container">
        <CountCards
          title="Nouvelles Réservations"
          count={tableData.length}
        ></CountCards>
        <CountCards
          title="Total des Réservations"
          count={tableData.length}
        ></CountCards>
        <CountCards title="Total clients" count={tableData.length}></CountCards>
        <CountCards
          title="Réservations annulées"
          count={tableData.length}
        ></CountCards>
      </div>
      <Table
        title="Mes Services"
        selectOptions={["Binnovant store", "Option 2"]}
        onOptionChange={(selectedOption) => console.log(selectedOption)}
        tr={tableHeaders}
        td={tableData}
        action={actions}
      ></Table>
    </>
  );
}
