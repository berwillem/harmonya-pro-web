import "./StoreStep4.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoArrowForward } from "react-icons/io5";
import useMultiStepFormStore from "@/store/Zustand/Store";
import { useEffect } from "react";

// Schéma de validation avec Yup
const schema = yup.object({
  days: yup
    .array()
    .of(
      yup.object({
        open: yup.boolean().required("Le statut est obligatoire"),
        openingTime: yup
          .string()
          .nullable()
          .when("open", {
            is: true,
            then: (schema) => schema.required("L'heure d'ouverture est obligatoire"),
            otherwise: (schema) => schema.nullable(),
          }),
        closingTime: yup
          .string()
          .nullable()
          .when("open", {
            is: true,
            then: (schema) => schema.required("L'heure de fermeture est obligatoire"),
            otherwise: (schema) => schema.nullable(),
          }),
      })
    )
    .required(),
});




type Day = {
  open: boolean;
  openingTime?: string | null;
  closingTime?: string | null;
};

type FormInputs = {
  days: Day[];
};


export default function StoreStep4() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      days: Array(7).fill({ open: false, openingTime: null, closingTime: null }),
    },
  });
  const { step, nextStep, updateStepData, formData } = useMultiStepFormStore();

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const watchDays = watch("days");
  useEffect(() => {
    if (formData[4]) {
      formData[4].days.forEach((day: Day, index: number) => {
        setValue(`days.${index}.open`, day.open);
        setValue(`days.${index}.openingTime`, day.openingTime || null);
        setValue(`days.${index}.closingTime`, day.closingTime || null);
      });
    }
  }, [formData, setValue]);
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    updateStepData(step, data);
    nextStep();
  };

  const toggleDayOpen = (index: number) => {
    const currentOpen = watchDays[index]?.open || false;
    setValue(`days.${index}.open`, !currentOpen);
    if (!currentOpen) {
      setValue(`days.${index}.openingTime`, "");
      setValue(`days.${index}.closingTime`, "");
    } else {
      setValue(`days.${index}.openingTime`, null);
      setValue(`days.${index}.closingTime`, null);
    }
  };


  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Title-button">
          <h2>Horaires d'ouverture</h2>
          <button type="submit">
            <span>Continue</span>
            <IoArrowForward />
          </button>
        </div>

        <div className="table-hour">
          {daysOfWeek.map((day, index) => (
            <div className="day" key={day}>
              <h4 className="day-name">{day}</h4>
              <div
                className={watchDays[index]?.open ? "toogle-open" : "toogle-close"}
                onClick={() => toggleDayOpen(index)}
              >
                {watchDays[index]?.open ? "Open" : "Close"}
              </div>
              {watchDays[index]?.open && (
                <>
                  <div>
                    <input
                      type="time"
                      {...register(`days.${index}.openingTime` as const)}
                      placeholder="Heure d'ouverture"
                    />
                    {errors.days?.[index]?.openingTime && (
                      <p style={{ color: "red" }}>
                        {errors.days[index].openingTime?.message}
                      </p>
                    )}
                  </div>
                  <p>To</p>
                  <div>
                    <input
                      type="time"
                      {...register(`days.${index}.closingTime` as const)}
                      placeholder="Heure de fermeture"
                    />
                    {errors.days?.[index]?.closingTime && (
                      <p style={{ color: "red" }}>
                        {errors.days[index].closingTime?.message}
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <button type="submit" className="button-respo">
          <span>Continue</span>
          <IoArrowForward />
        </button>
      </form>
    </div>
  );
}
