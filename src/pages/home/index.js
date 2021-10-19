import axios from "axios";
import isEmpty from "is-empty";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import VehicleList from "../../assets/components/common/vehicleList";
import { map } from "../../assets/images";
import { API_URL } from "../../utils/variables";

import styles from "./styles.module.scss";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .post(`${API_URL}/api/cars`)
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Unable to load cars");
      });
  }, []);

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

          {loading ? (
            "Loading..."
          ) : !isEmpty(cars) ? (
            <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
              <tbody>
                {cars.map((vehicle, idx) => (
                  <VehicleList key={idx} {...vehicle} />
                ))}
              </tbody>
            </table>
          ) : (
            "No cars"
          )}
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
