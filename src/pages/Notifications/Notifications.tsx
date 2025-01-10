import "./Notifications.css";

export default function Notifications() {
  return (
    <div className="first-card" style={{ gap: "20px", marginBottom: "35px" }}>
      <div className="first-card-titles">
        <h1>Notification de l'appareil</h1>
        <h2 className="plan">
          We need permission from your browser to show notifications. Request
          Permission
        </h2>
      </div>

      <table className="notifications-table black-td">
        <thead>
          <tr>
            <th>Type</th>
            <th>Email</th>
            <th>Browser</th>
            <th>App</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nouveauté</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Un nouveau navigateur utilisé pour se connecter</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
          <tr>
            <td>Réservations</td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="notifications-footer">
        <label htmlFor="notification-preference">
          Quand devons-nous vous envoyer des notifications ?
        </label>
        <div className="custom-select-container">
          <select className="custom-select">
            <option value="online" selected>
              Quand je suis en ligne uniquement
            </option>
            <option value="always">Toujours</option>
            <option value="never">Jamais</option>
          </select>
        </div>
      </div>

      <div className="notifications-actions">
        <button className="save-button">Sauvegarder les modifications</button>
        <button className="cancel-button">Annuler</button>
      </div>
    </div>
  );
}
