import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import { VehicleListHistory } from "../../assets/components/common/vehicleList";
import { vehiclesHistory } from "../../assets/data/vehicles";

const HistoryPage = () => {
  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="history" placeholder="search for offence history" />
      </div>

      <div className="uk-margin-medium-top">
        <Card>
          <h2>History</h2>

          <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
            <tbody>
              {vehiclesHistory.map((vehicle, idx) => (
                <VehicleListHistory key={idx} {...vehicle} />
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default HistoryPage;
