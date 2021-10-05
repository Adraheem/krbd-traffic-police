import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import { VehicleListHistory } from "../../assets/components/common/vehicleList";
import { vehiclesHistory } from "../../assets/data/vehicles";
import styles from "./styles.module.scss";

const CarPage = () => {
  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="car" placeholder="search for car details" />
      </div>

      <div className="uk-margin-medium-top">
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
                  <h4 className="uk-margin-remove uk-text-bold">BELLO</h4>
                  <h4 className="uk-margin-remove">Rasheed Adebayo</h4>
                  <p className="uk-margin-remove uk-text-primary">
                    Registered Owner
                  </p>
                </div>
              </div>
            </div>
            <div className="uk-width-1-2 uk-text-right">
              <p>
                <span className="uk-text-bold">TOY20A</span>{" "}
                <button className="uk-button uk-button-primary uk-button-small uk-border-rounded uk-margin-small-left">
                  Edit
                </button>
              </p>
              <p>
                <span className="uk-text-bold">Plate Number:</span> MUS-109-KJ
              </p>
              <p>
                <span className="uk-text-bold">Model:</span> TOYOTA VENZA 2020{" "}
              </p>
            </div>
          </div>

          <div className="uk-margin-large-top">
            <h4>Recent Offences</h4>

            <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
              <tbody>
                {vehiclesHistory.map((vehicle, idx) => (
                  <VehicleListHistory key={idx} {...vehicle} />
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CarPage;
