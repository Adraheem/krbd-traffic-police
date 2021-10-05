import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import VehicleList from "../../assets/components/common/vehicleList";
import { vehicles } from "../../assets/data/vehicles";
import { map } from "../../assets/images";

import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="car" placeholder="Search for car details" />
      </div>

      <div className={styles.map}>
        <img src={map} alt="map" />
      </div>

      <div className="uk-margin-large-top">
        <Card>
          <h2>Vehicles</h2>

          <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
            <tbody>
              {vehicles.map((vehicle, idx) => (
                <VehicleList key={idx} {...vehicle} />
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
