import React, { useState } from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { Popover } from "@mui/material";

interface Action {
  text: string;
  icon: React.ElementType;
  onClick: (id: any) => void;
}

interface IconObj {
  icon: React.ElementType[];
  link: string;
  color1?: string;
  color2?: string;
  type?: string;
}
interface TableProps {
  title?: string;
  selectOptions?: string[];
  onOptionChange?: (selectedOption: string) => void;
  tr: string[];
  td: Array<
    | Array<{ text?: string; icons?: IconObj[] }>
    | { colspan: number; text: string }
  >;
  pagination?: boolean;
  action?: Action[];
}

export default function Table({
  title,
  selectOptions,
  onOptionChange,
  tr,
  td,
  pagination,
  action,
}: TableProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedId, setSelectedId] = useState<any>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedId(null);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onOptionChange) {
      onOptionChange(e.target.value);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const statusColors: Record<string, string> = {
    accepted: "rgba(255, 129, 33, 0.07)",
    canceled: "rgba(255, 33, 74, 0.1)",
    Bleu: "rgba(59, 33, 255, 0.1)",
    Vert: "rgba(37, 255, 33, 0.1)",
    Jaune: "rgba(255, 136, 0, 0.1)",
    blacklist: "rgba(0, 0, 0, 0.1)",
  };

  const Colors: Record<string, string> = {
    accepted: "rgba(255, 129, 33, 1)",
    canceled: "rgba(255, 33, 74, 1)",
    Bleu: "rgba(59, 33, 255, 1)",
    Vert: "rgba(37, 255, 33, 1)",
    Jaune: "rgba(255, 165, 0, 1)",
    blacklist: "rgba(0, 0, 0, 1)",
  };

  const PADDING: Record<string, string> = {
    Padding: "7px 15px",
  };

  const isFirstHeaderGreen = tr[0] === "#";

  return (
    <div className="table-container">
      {(title || selectOptions) && (
        <div className="table-header">
          {title && <h2 className="table-title">{title}</h2>}
          {selectOptions && (
            <select className="table-select" onChange={handleSelectChange}>
              {selectOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
      <div className="table-div">
        <table>
          <thead>
            <tr className="head">
              {tr.map((header, index) => (
                <td className={header === "#" ? "green" : ""} key={index}>
                  {header}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {td.map((line, rowIndex) => (
              <tr key={rowIndex}>
                {Array.isArray(line) ? (
                  line.map((elm, colIndex) => (
                    <td
                      key={colIndex}
                      className={
                        isFirstHeaderGreen && colIndex === 0 ? "green" : ""
                      }
                    >
                      {elm?.text && (
                        <span
                          style={{
                            backgroundColor:
                              elm.text === "En attente" ||
                              elm.text === "VIP" ||
                              elm.text === "El Dahabiya"
                                ? statusColors["Jaune"]
                                : elm.text === "CIB" ||
                                  elm.text === "Client normal" ||
                                  elm.text === "Cash" ||
                                  elm.text === "Payé" ||
                                  elm.text === "Validé"
                                ? statusColors["Vert"]
                                : elm.text === "A venir" || elm.text === "Visa"
                                ? statusColors["Bleu"]
                                : elm.text === "Annulé"
                                ? statusColors["canceled"]
                                : elm.text === "Blacklisted"
                                ? statusColors["blacklist"]
                                : "transparent",

                            color:
                              elm.text === "El Dahabiya" ||
                              elm.text === "VIP" ||
                              elm.text === "En attente"
                                ? Colors["Jaune"]
                                : elm.text === "Client normal" ||
                                  elm.text === "CIB" ||
                                  elm.text === "Cash" ||
                                  elm.text === "Payé" ||
                                  elm.text === "Validé"
                                ? Colors["Vert"]
                                : elm.text === "A venir" || elm.text === "Visa"
                                ? Colors["Bleu"]
                                : elm.text === "Annulé"
                                ? Colors["canceled"]
                                : elm.text === "Blacklisted"
                                ? Colors["blacklist"]
                                : "inherit",
                            borderRadius: "4px",
                            padding:
                              elm.text === "Payé" ||
                              elm.text === "A venir" ||
                              elm.text === "Annulé" ||
                              elm.text === "Visa" ||
                              elm.text === "CIB" ||
                              elm.text === "Cash" ||
                              elm.text === "Client normal" ||
                              elm.text === "Blacklisted" ||
                              elm.text === "VIP" ||
                              elm.text === "En attente" ||
                              elm.text === "Validé" ||
                              elm.text === "El Dahabiya"
                                ? PADDING["Padding"]
                                : "unset",
                          }}
                        >
                          {elm.text}
                        </span>
                      )}
                      {elm?.icons &&
                        elm.icons.map((iconObj, iconIndex) => (
                          <span
                            key={iconIndex}
                            onClick={(e) =>
                              iconObj.type === "pop"
                                ? handleClick(
                                    e as React.MouseEvent<HTMLButtonElement>,
                                    rowIndex
                                  )
                                : navigate(iconObj.link)
                            }
                            style={{
                              backgroundColor: iconObj.color1 || "transparent",
                              cursor: "pointer",
                            }}
                          >
                            {React.createElement(iconObj.icon[0], {
                              style: { color: iconObj.color2 || "inherit" },
                            })}
                          </span>
                        ))}
                    </td>
                  ))
                ) : (
                  <td colSpan={line.colspan} style={{ textAlign: "center" }}>
                    {line.text}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div
          style={{
            padding: "0 10px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          {action &&
            action.map((actionItem, actionIndex) => (
              <div
                key={actionIndex}
                onClick={() => {
                  actionItem.onClick(selectedId);
                  handleClose();
                }}
                style={{
                  display: "flex",
                  alignItems: "right",
                  padding: "10px",
                  cursor: "pointer",
                  gap: "10px",
                }}
                className="action-item"
              >
                {React.createElement(actionItem.icon)}
                <span>{actionItem.text}</span>
              </div>
            ))}
        </div>
      </Popover>
    </div>
  );
}
