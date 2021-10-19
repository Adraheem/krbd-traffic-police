import { useParams } from "react-router";
import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import VehicleList, {
  VehicleListHistory,
} from "../../assets/components/common/vehicleList";
import { appeal, vehiclesHistory } from "../../assets/data/vehicles";
import { useLocation } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/variables";
import toast from "react-hot-toast";
import isEmpty from "is-empty";

const SearchPage = () => {
  const params = useParams();
  const { search } = useLocation();

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const q = new URLSearchParams(search);
  const query = q.get("q");
  const type = params.type;

  // console.log(query);
  // console.log(type);

  useEffect(() => {
    axios
      .post(`${API_URL}/api/${type}/search`, { query })
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("An error occurred");
      });
  }, [type, query]);

  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path={params.type} placeholder="search for car details" />
      </div>

      <div className="uk-margin-large-top">
        <Card>
          <h2>
            {params.type === "car" && "Vehicles"}
            {params.type === "history" && "History"}
            {params.type === "appeal" && "Appeal"}
          </h2>

          {loading ? (
            "Loading..."
          ) : isEmpty(result) ? (
            "No results found"
          ) : (
            <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
              <tbody>
                {type === "car" &&
                  result.map((vehicle, idx) => (
                    <VehicleList key={idx} {...vehicle} />
                  ))}

                {type === "history" &&
                  vehiclesHistory.map((vehicle, idx) => (
                    <VehicleListHistory key={idx} {...vehicle} />
                  ))}

                {type === "appeal" &&
                  appeal.map((vehicle, idx) => (
                    <VehicleListHistory key={idx} {...vehicle} />
                  ))}
              </tbody>
            </table>
          )}
        </Card>
      </div>
    </div>
  );
};

export default SearchPage;
