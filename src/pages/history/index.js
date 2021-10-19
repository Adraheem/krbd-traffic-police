import axios from "axios";
import isEmpty from "is-empty";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import { VehicleListHistory } from "../../assets/components/common/vehicleList";
import { API_URL } from "../../utils/variables";

const HistoryPage = () => {
  const [loading, setLoading] = useState(true);
  const [offences, setOffences] = useState([]);

  useEffect(() => {
    axios
      .post(`${API_URL}/api/offences`)
      .then((response) => {
        setOffences(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Unable to load offences");
      });
  }, []);

  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="history" placeholder="search for offence history" />
      </div>

      <div className="uk-margin-medium-top">
        <Card>
          <h2>History</h2>

          {loading ? (
            "Loading..."
          ) : !isEmpty(offences) ? (
            <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
              <tbody>
                {offences.map((vehicle, idx) => (
                  <VehicleListHistory key={idx} {...vehicle} />
                ))}
              </tbody>
            </table>
          ) : (
            "No appeals"
          )}
        </Card>
      </div>
    </div>
  );
};

export default HistoryPage;
