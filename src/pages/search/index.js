import { useParams } from "react-router";
import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import VehicleList, {
  VehicleListHistory,
} from "../../assets/components/common/vehicleList";
import { vehicles, vehiclesHistory } from "../../assets/data/vehicles";
import { useLocation } from "react-router";

const SearchPage = () => {
  const params = useParams();
  const { search } = useLocation();

  const q = new URLSearchParams(search);
  const query = q.get("q");
  const type = params.type;

  console.log(query);
  console.log(type);

  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path={params.type} placeholder="search for car details" />
      </div>

      <div className="uk-margin-large-top">
        <Card>
          <h2>{params.type === "car" ? "Vehicles" : "History"}</h2>

          <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
            <tbody>
              {type === "car" &&
                vehicles.map((vehicle, idx) => (
                  <VehicleList key={idx} {...vehicle} />
                ))}

              {type === "history" &&
                vehiclesHistory.map((vehicle, idx) => (
                  <VehicleListHistory key={idx} {...vehicle} />
                ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default SearchPage;
