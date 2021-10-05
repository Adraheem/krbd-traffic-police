import { Icon } from "@iconify/react";
import Card from "../../assets/components/common/card";
import TextInput from "../../assets/components/common/textInput";

const AddCarSecond = ({ details, onChange, back, submit }) => {
  return (
    <Card>
      <h2 className="uk-margin-remove-bottom">Add car</h2>
      <p className="uk-margin-remove-top uk-text-bold">Vehicle Details</p>

      <div className="uk-margin-large-top">
        <div
          className="uk-grid-small uk-child-width-1-2 uk-margin"
          data-uk-grid
        >
          <div>
            <TextInput
              type="text"
              name="model"
              value={details.model}
              onChange={onChange}
              placeholder="Model"
              icon="bx:bxs-car"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="plate"
              value={details.plate}
              onChange={onChange}
              placeholder="Plate Number"
              icon="emojione-monotone:letter-r"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="color"
              value={details.color}
              onChange={onChange}
              placeholder="Color"
              icon="bx:bxs-color-fill"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="date_of_purchase"
              value={details.date_of_purchase}
              onChange={onChange}
              placeholder="Date of Purchase"
              icon="ic:round-date-range"
            />
          </div>
        </div>

        <div className="uk-margin">
          <TextInput
            type="text"
            name="spec"
            value={details.spec}
            onChange={onChange}
            placeholder="Special Modifications"
            icon="fluent:color-line-20-filled"
          />
        </div>

        <h3>Payment Details</h3>

        <div className="uk-margin">
          <TextInput
            type="text"
            name="card"
            value={details.card}
            onChange={onChange}
            placeholder="Card Number"
            icon="bi:credit-card"
          />
        </div>

        <div
          className="uk-grid-small uk-child-width-1-2 uk-margin"
          data-uk-grid
        >
          <div>
            <TextInput
              type="text"
              name="exp"
              value={details.exp}
              onChange={onChange}
              placeholder="Expiry Date"
              icon="ic:round-date-range"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="cvv"
              value={details.cvv}
              onChange={onChange}
              placeholder="CVV"
              icon="bx:bx-credit-card"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="bvn"
              value={details.bvn}
              onChange={onChange}
              placeholder="BVN"
              icon="fluent:document-page-number-24-regular"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="bank_name"
              value={details.bank_name}
              onChange={onChange}
              placeholder="Bank Name"
              icon="fluent:building-bank-28-filled"
            />
          </div>
        </div>

        <p className="uk-text-center">
          <button
            type="button"
            onClick={back}
            className="uk-button uk-button-primary uk-button-large uk-border-rounded uk-width-small uk-margin-small-right"
          >
            <Icon icon="akar-icons:arrow-left" fontSize="1.4rem" />
          </button>

          <button
            type="button"
            onClick={submit}
            className="uk-button uk-button-primary uk-button-large uk-border-rounded uk-width-small"
          >
            Submit
          </button>
        </p>
      </div>
    </Card>
  );
};

export default AddCarSecond;
