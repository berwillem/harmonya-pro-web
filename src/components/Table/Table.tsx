import React, { useState } from "react";
import "./Table.css";
import { useNavigate } from "react-router-dom";
import { Popover } from "@mui/material";
import { Link } from "react-router-dom";

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
    pending: "rgba(59, 33, 255, 0.1)",
    completed: "rgba(37, 255, 33, 0.1)",
  };

  const Colors: Record<string, string> = {
    accepted: "rgba(255, 129, 33, 1)",
    canceled: "rgba(255, 33, 74, 1)",
    pending: "rgba(59, 33, 255, 1)",
    completed: "rgba(37, 255, 33, 1)",
  };

  const PADDING: Record<string, string> = {
    accepted: "7px 15px",
    canceled: "7px 15px",
    pending: "7px 15px",
    completed: "7px 15px",
  };

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
      <table>
        <thead>
          <tr className="head">
            {tr.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {td.map((line, rowIndex) => (
            <tr key={rowIndex}>
              {Array.isArray(line) ? (
                line.map((elm, colIndex) => (
                  <td key={colIndex}>
                    {elm?.text && (
                      <span
                        style={{
                          backgroundColor:
                            statusColors[elm.text] || "transparent",
                          color: Colors[elm.text] || "inherit",
                          // padding: PADDING[elm.text] || "inherit",
                          borderRadius: "4px",
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
      </table>
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
