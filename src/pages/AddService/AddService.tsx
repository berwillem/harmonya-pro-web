import "./AddService.css"; // Import global CSS
import ServicesCard from "@/components/ServicesCard/ServicesCard";

const services = [
  {
    imageSrc:
      "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
    title: "Coiffure homme",
    description: "Lorem Ipsum is simply dummy text of the printing and ...",
    tags: ["SPA", "Salon de coiffure"],
    color: "#FFC107",
  },
  {
    imageSrc:
      "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
    title: "Massage Therapy",
    description: "Relax and rejuvenate with our expert therapists.",
    tags: ["SPA", "Wellness"],
    color: "#00FF00",
  },
];

const ServicesPage = () => {
  return (
    <div className="cards-container">
      {services.map((service, index) => (
        <ServicesCard
          key={index}
          imageSrc={service.imageSrc}
          title={service.title}
          description={service.description}
          tags={service.tags}
          color={service.color}
        />
      ))}
      <div className="creer">
        <button>Créer un nouveau service</button>
      </div>
    </div>
  );
};

export default ServicesPage;
