import "./Agenda.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Calandar from "@/components/Calandar/Calandar";
export default function Agenda() {
  return (
    <main className="agenda-page">
      <div className="filter-agenda">
        <select name="" id="">
          <option value="">binnovant store</option>
        </select>
        <select name="" id="">
          <option value="">Employée</option>
        </select>
        <select name="" id="">
          <option value="">Timing</option>
        </select>

      </div>
      <div className="agenda-container">
        <div className="agenda-header">
          <button className="add-reservation">
            Ajouter une réservation
          </button>
          <div className="right-header">
            <div className="switch-date">
              <div className="switch">
                < IoIosArrowBack />  <IoIosArrowForward />
              </div>
              17 Décembre 2024
            </div>
            <div className="nbr-reservation">
              15 réservation
            </div>
          </div>
        </div>
        <div className="calendar-container">
          <div className="left-calandar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>
          <div className="right-calandar">
            <Calandar />
          </div>
        </div>
        <button className="add-reservation-respo">
          Ajouter une réservation
        </button>
      </div>

    </main>
  )
}