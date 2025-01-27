import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowForward } from "react-icons/io5";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import { useState } from "react";
import "./BoostStep2.css"
const schema = yup.object().shape({
  selectedService: yup.string().required("Veuillez choisir un service."),
});

type FormInputs = {
  selectedService: string;
};

const services = [
  {
    id: "1",
    imageSrc: "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp",
    title: "Coiffure homme",
    description: "Lorem Ipsum is simply dummy text of the printing and ...",
    tags: ["SPA", "Salon de coiffure"],
    color: "#FFC107",
  },
  {
    id: "2",
    imageSrc:
      "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
    title: "Massage Therapy",
    description: "Relax and rejuvenate with our expert therapists.",
    tags: ["SPA", "Wellness"],
    color: "#00FF00",
  },
];

export default function BoostStep2() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Service sélectionné :", data.selectedService);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setValue("selectedService", serviceId); // Met à jour le formulaire RHF
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Title-button">
            <div className="text">
              <h2>Activer un boost</h2>
              <p>Commencez par sélectionner un service</p>
            </div>
            <button type="submit" disabled={!selectedService}>
              <span>Continue</span>
              <IoArrowForward />
            </button>
          </div>
          {errors.selectedService && (
            <p className="error">{errors.selectedService.message}</p>
          )}
          <div className="color-container">
            {services.map((service) => (
              <div
                className="select-card"
                key={service.id}
                onClick={() => handleServiceSelect(service.id)}
                style={{
                  border:
                    selectedService === service.id
                      ? `3px solid ${service.color}`
                      : "0px solid #ddd",
                  borderRadius: "12px",
                  cursor: "pointer",
                  width: "22%"

                }}
              >
                <ServicesCard
                  imageSrc={service.imageSrc}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                  color={service.color}
                />
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
