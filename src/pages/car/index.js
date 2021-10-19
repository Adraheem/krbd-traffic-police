import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import { VehicleListHistory } from "../../assets/components/common/vehicleList";
import { API_URL } from "../../utils/variables";
import styles from "./styles.module.scss";

const CarPage = () => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const [offences, setOffences] = useState([]);
  const [loadingOffences, setLoadingOffences] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .post(`${API_URL}/api/car`, { car: id })
      .then((response) => {
        setDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("An error occurred while loading page");
      });

    axios
      .post(`${API_URL}/api/offence/recent`, { car: id })
      .then((response) => {
        setOffences(response.data);
        setLoadingOffences(false);
      })
      .catch((error) => {
        toast.error("An error occurred while loading page");
      });
  }, [id]);

  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="car" placeholder="search for car details" />
      </div>

      <div className="uk-margin-medium-top">
        {loading ? (
          "Loading..."
        ) : (
          <Card>
            <h2>Car Details</h2>

            <div data-uk-grid>
              <div className="uk-width-1-2">
                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                  <div className="uk-width-auto">
                    <div className={styles.profileImage}>
                      <img
                        src="https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <div className="uk-width-expand">
                    {/* <h4 className="uk-margin-remove uk-text-bold">BELLO</h4> */}
                    <h4 className="uk-margin-remove">{details.name}</h4>
                    <p className="uk-margin-remove uk-text-primary">
                      Registered Owner
                    </p>
                  </div>
                </div>
              </div>
              <div className="uk-width-1-2 uk-text-right">
                <p>
                  <span className="uk-text-bold">{details.slug}</span>{" "}
                  <button className="uk-button uk-button-primary uk-button-small uk-border-rounded uk-margin-small-left">
                    Edit
                  </button>
                </p>
                <p>
                  <span className="uk-text-bold">Plate Number:</span>{" "}
                  {details.plate}
                </p>
                <p>
                  <span className="uk-text-bold">Model:</span> {details.model}{" "}
                </p>
              </div>
            </div>

            <div className="uk-margin-large-top">
              <div className="uk-grid-small" data-uk-grid>
                <div className="uk-width-expand">
                  <h4>Recent Offences</h4>
                </div>
                <div className="uk-width-auto">
                  <Link to={`/offence/${id}/add`}>Add new offence</Link>
                </div>
              </div>

              {loadingOffences ? (
                "Loading..."
              ) : (
                <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
                  <tbody>
                    {offences.map((vehicle, idx) => (
                      <VehicleListHistory key={idx} {...vehicle} />
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CarPage;
