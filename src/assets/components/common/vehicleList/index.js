import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const VehicleList = ({ plate, model, time, fine, status }) => {
  return (
    <tr className="uk-table-link">
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
    </tr>
  );
};

export default VehicleList;
