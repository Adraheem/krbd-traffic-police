import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router";
import Card from "../../assets/components/common/card";
import TextInput from "../../assets/components/common/textInput";
import { API_URL } from "../../utils/variables";

const AddOffence = () => {
  const [details, setDetails] = useState({
    car: "",
    reason: "",
    amount: "",
    location: "",
  });

  const { car } = useParams();
  const history = useHistory();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setDetails((d) => ({ ...d, car: car }));
  }, [car]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/api/offence/add`, details)
      .then((response) => {
        toast.success("Offence added successfully");
        history.push(`/car/${car}`);
      })
      .catch((err) => {
        toast.error("An error occurred");
      });
  };

  return (
    <div>
      <Card>
        <h3>Add Offence</h3>

        <form onSubmit={handleSubmit}>
          <div className="uk-margin">
            <div className="uk-grid-small uk-child-width-1-2" data-uk-grid>
              <div>
                <TextInput
                  type="text"
                  placeholder="Car"
                  name="car"
                  value={details.car}
                  onChange={handleChange}
                  icon="bx:bxs-car"
                  disabled
                />
              </div>
              <div>
                <TextInput
                  type="tel"
                  placeholder="Amount"
                  name="amount"
                  value={details.amount}
                  onChange={handleChange}
                  icon="cil:money"
                />
              </div>
            </div>
          </div>

          <div>
            <TextInput
              type="text"
              placeholder="Location"
              name="location"
              value={details.location}
              onChange={handleChange}
              icon="akar-icons:location"
            />
          </div>

          <div className="uk-margin">
            <textarea
              placeholder="Reason"
              name="reason"
              onChange={handleChange}
              className="uk-textarea uk-border-rounded"
              rows={5}
            />
          </div>

          <div className="uk-margin">
            <button
              type="submit"
              className="uk-button uk-button-primary uk-button-large uk-border-rounded uk-width-small"
            >
              Submit
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddOffence;
