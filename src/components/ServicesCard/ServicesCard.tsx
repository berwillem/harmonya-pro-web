import { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

interface ServicesCardProps {
  imageSrc: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

export default function ServicesCard({
  imageSrc,
  title,
  description,
  tags,
  color,
}: ServicesCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !(formRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="card">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="card-image" />
        <button className="menu-button">
          <div className="gerer">
            <div
              ref={formRef}
              className="manage"
              onClick={() => setIsOpen(!isOpen)}
              style={{ cursor: "pointer" }}
            >
              <HiDotsVertical size={26} className="figlobe" />
            </div>

            <div
              className={isOpen ? "manage-menu active-manage" : "manage-menu"}
            >
              <ul>
                <li>
                  <span>Edit</span>
                </li>
                <li>
                  <span>Delete</span>
                </li>
              </ul>
            </div>
          </div>
        </button>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
          <div className="dot" style={{ backgroundColor: color }}></div>
        </div>
      </div>
    </div>
  );
}
