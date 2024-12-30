import { IoArrowForward } from "react-icons/io5";
import "./ServiceStep6.css"
import useMultiStepFormStore from "@/store/Zustand/Store";
import { Key } from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceStep6() {
  const { formData } = useMultiStepFormStore();

  const createImageURL = (file: File) => {
    if (file && file instanceof Blob) {
      return URL.createObjectURL(file);
    }
    return "";
  };


  const { resetStore } = useMultiStepFormStore();
  const navigat = useNavigate()

  const onSubmit = () => {
    resetStore()
    navigat("/ValidationPage")
  };
  return (
    <div className="container">
      <div className="title">
        <h2>Check your service</h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="service-infos">
          <div className="image-container2">
            <div className="big-image">
              {formData[2].images[0] && <img src={createImageURL(formData[2].images[0])} alt="big" />}

            </div>
            <div className="small-image">
              {formData[2].images && formData[2].images.map((img: File, index: Key | null | undefined) => (
                <img src={createImageURL(img)} alt="small" key={index} />
              ))}


            </div>

          </div>
          <div className="text-container">
            <div className="text">
              <h3 className="title-service">
                {formData[1].serviceName && formData[1].serviceName}
              </h3>
              <p className="description-service">
                {formData[1].descriptionService && formData[1].descriptionService}
              </p>
              <h4 className="price-service">
                {formData[1].servicePrice && formData[1].servicePrice} DZD
              </h4>

            </div>
            <div className="Title-button">
              <button type="submit">
                <span>Continue</span>
                <IoArrowForward />
              </button>
            </div>
          </div>

        </div>
        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>

    </div>
  )
}