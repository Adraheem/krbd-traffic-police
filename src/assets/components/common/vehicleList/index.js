import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const VehicleList = ({ plate, model, time, fine, status }) => {
  return (
    <tr>
      <td className="uk-table-link">
        <Link to={`/car/${plate}`} className="uk-link-reset">
          <div>
            <p className="uk-margin-remove">
              <Icon
                icon="akar-icons:circle-fill"
                inline={true}
                className={`uk-text-${status} uk-text-small uk-margin-small-right`}
              />
              <span className="uk-text-bold">{plate}</span> - {model}
            </p>
            <p className="uk-margin-remove uk-text-small">
              <span className="uk-margin-small-right">{time}</span>
              {fine}
            </p>
          </div>
        </Link>
      </td>
    </tr>
  );
};

export const VehicleListHistory = ({
  plate,
  place,
  time,
  fine,
  reason,
  status,
}) => {
  return (
    <tr>
      <td className="uk-table-link">
        <Link to={`/car/${plate}`} className="uk-link-reset">
          <div>
            <p className="uk-margin-remove">
              <Icon
                icon="akar-icons:circle-fill"
                inline={true}
                className={`uk-text-${status} uk-text-small uk-margin-small-right`}
              />
              {reason} - <span className="uk-text-primary">{fine}</span>
            </p>
            <p className="uk-margin-remove uk-text-small">
              <span className="uk-margin-small-right">{time}</span>
              {place}
            </p>
          </div>
        </Link>
      </td>

      <td className="uk-width-small">
        <button className="uk-button uk-button-primary uk-border-rounded uk-padding-small uk-padding-remove-vertical shrink-on-click">
          <span className="uk-text-nowrap">
            <Icon icon="carbon:send-alt-filled" fontSize="1.5rem" /> Send
          </span>
        </button>
      </td>
    </tr>
  );
};

export const AppealList = ({ reason, plate, time, content, status }) => {
  return (
    <tr>
      <td className="uk-table-link">
        <Link to={`/car/${plate}`} className="uk-link-reset">
          <div>
            <p className="uk-margin-remove">
              <Icon
                icon="akar-icons:circle-fill"
                inline={true}
                className={`uk-text-${status} uk-text-small uk-margin-small-right`}
              />
              {reason} - <span className="uk-text-bold">{plate}</span>
            </p>
            <p className="uk-margin-remove uk-text-small uk-text-truncate">
              <span className="uk-margin-small-right">{time}</span>
              {content}
            </p>
          </div>
        </Link>
      </td>

      <td className="">
        <Icon
          icon="akar-icons:circle-check-fill"
          fontSize="2rem"
          className="uk-text-success"
        />
      </td>
      <td className="">
        <Icon
          icon="ic:round-cancel"
          fontSize="2rem"
          className="uk-text-danger"
        />
      </td>
    </tr>
  );
};

export default VehicleList;
