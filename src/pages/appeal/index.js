import Card from "../../assets/components/common/card";
import SearchBar from "../../assets/components/common/searchBar";
import { AppealList } from "../../assets/components/common/vehicleList";
import { appeal } from "../../assets/data/vehicles";

const AppealPage = () => {
  return (
    <div>
      <div className="uk-width-xlarge">
        <SearchBar path="appeal" placeholder="Search for appeal" />
      </div>

      <div className="uk-margin-medium-top">
        <Card>
          <h2>Appeal</h2>

          <table className="uk-table uk-table-large uk-table-divider uk-table-hover">
            <tbody>
              {appeal.map((vehicle, idx) => (
                <AppealList key={idx} {...vehicle} />
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default AppealPage;
