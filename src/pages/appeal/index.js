import axios from "axios";
import isEmpty from "is-empty";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import { AppealList } from "../../assets/components/common/vehicleList";
import { API_URL } from "../../utils/variables";

const AppealPage = () => {
  const [loading, setLoading] = useState(true);
  const [appeals, setAppeals] = useState([]);

  useEffect(() => {
    axios
      .post(`${API_URL}/api/appeals`)
      .then((response) => {
        setAppeals(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Unable to load appeals");
      });
  }, []);

  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="appeal" placeholder="Search for appeal" />
      </div>

      <div className="uk-margin-medium-top">
        <Card>
          <h2>Appeal</h2>

          {loading ? (
            "Loading..."
          ) : !isEmpty(appeals) ? (
            <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
              <tbody>
                {appeals.map((vehicle, idx) => (
                  <AppealList key={idx} {...vehicle} />
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

export default AppealPage;
