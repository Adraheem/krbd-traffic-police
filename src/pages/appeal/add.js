import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import Card from "../../assets/components/common/card";
import TextInput from "../../assets/components/common/textInput";
import { API_URL } from "../../utils/variables";

const AddAppeal = () => {
  const [details, setDetails] = useState({
    car: "",
    reason: "",
  });

  const { car, id } = useParams();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setDetails((d) => ({ ...d, car: car }));
  }, [car]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/api/appeal/add`, { ...details, offence: id })
      .then((response) => {
        toast.success("Appeal added successfully");
        setDetails({
          car: "",
          reason: "",
        });
      })
      .catch((err) => {
        toast.error("An error occurred");
      });
  };

  return (
    <div className="uk-margin-large-top">
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
            </div>
          </div>

          <div className="uk-margin">
            <textarea
              placeholder="Reason"
              name="reason"
              value={details.reason}
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

export default AddAppeal;
