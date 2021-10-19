import { useState } from "react";
import Card from "../../assets/components/common/card";
import TextInput from "../../assets/components/common/textInput";

const AddOffence = () => {
  const [details, setDetails] = useState({
    car: "",
    reason: "",
    amount: "",
    location: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(details);
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
            <button type="submit" className="uk-button uk-button-primary uk-button-large uk-border-rounded uk-width-small">Submit</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddOffence;
