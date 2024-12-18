import { useEffect, useRef, useState } from "react";
import "./AddService.css"; // Import global CSS
import { HiDotsVertical } from "react-icons/hi";

const Card = () => {
  const [isLanguage, setIsLanguage] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formRef.current &&
        !(formRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsLanguage(false);
      }
    };

    if (isLanguage) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguage]);

  return (
    <div className="cards-container">
      {/* Card 1 */}
      <div className="card">
        <div className="image-container">
          <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            alt="Coiffure homme"
            className="card-image"
          />
          <button className="menu-button">
            <div className="gerer">
              <div
                ref={formRef}
                className="language"
                onClick={() => setIsLanguage(!isLanguage)}
                style={{ cursor: "pointer" }}
              >
                <HiDotsVertical size={26} className="figlobe" />
              </div>

              <div
                className={
                  isLanguage ? "language-menu active-language" : "language-menu"
                }
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
          <h3 className="card-title">Coiffure homme</h3>
          <p className="card-description">
            Lorem Ipsum is simply dummy text of the printing and ...
          </p>
          <div className="tags-container">
            <span className="tag">SPA</span>
            <span className="tag">Salon de coiffure</span>
            <div className="dot" style={{ backgroundColor: "#FFC107" }}></div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card">
        <div className="image-container">
          <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            alt="Coiffure femme"
            className="card-image"
          />
          <button className="menu-button">
            <div className="gerer">
              <div
                className="language"
                onClick={() => setIsLanguage(!isLanguage)}
                style={{ cursor: "pointer" }}
                ref={formRef}
              >
                <HiDotsVertical size={26} className="figlobe" />
              </div>

              <div
                className={
                  isLanguage ? "language-menu active-language" : "language-menu"
                }
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
          <h3 className="card-title">Coiffure femme</h3>
          <p className="card-description">
            Lorem Ipsum is simply dummy text of the printing and ...
          </p>
          <div className="tags-container">
            <span className="tag">SPA</span>
            <span className="tag">Salon de coiffure</span>
            <div className="dot" style={{ backgroundColor: "#E040FB" }}></div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card">
        <div className="image-container">
          <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            alt="Coiffure femme"
            className="card-image"
          />
          <button className="menu-button">
            <div className="gerer">
              <div
                className="language"
                onClick={() => setIsLanguage(!isLanguage)}
                style={{ cursor: "pointer" }}
                ref={formRef}
              >
                <HiDotsVertical size={26} className="figlobe" />
              </div>

              <div
                className={
                  isLanguage ? "language-menu active-language" : "language-menu"
                }
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
          <h3 className="card-title">Coiffure femme</h3>
          <p className="card-description">
            Lorem Ipsum is simply dummy text of the printing and ...
          </p>
          <div className="tags-container">
            <span className="tag">SPA</span>
            <span className="tag">Salon de coiffure</span>
            <div className="dot" style={{ backgroundColor: "#E040FB" }}></div>
          </div>
        </div>
      </div>
      {/* Card 3 */}
      <div className="card">
        <div className="image-container">
          <img
            src="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
            alt="Coiffure femme"
            className="card-image"
          />
          <button className="menu-button">
            <div className="gerer">
              <div
                className="language"
                onClick={() => setIsLanguage(!isLanguage)}
                style={{ cursor: "pointer" }}
                ref={formRef}
              >
                <HiDotsVertical size={26} className="figlobe" />
              </div>

              <div
                className={
                  isLanguage ? "language-menu active-language" : "language-menu"
                }
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
          <h3 className="card-title">Coiffure femme</h3>
          <p className="card-description">
            Lorem Ipsum is simply dummy text of the printing and ...
          </p>
          <div className="tags-container">
            <span className="tag">SPA</span>
            <span className="tag">Salon de coiffure</span>
            <div className="dot" style={{ backgroundColor: "#E040FB" }}></div>
          </div>
        </div>
      </div>

      <div className="creer">
        <button>Créer un nouveau service</button>
      </div>
    </div>
  );
};

export default Card;
