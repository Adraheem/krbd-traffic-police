import { Icon } from "@iconify/react";
import isEmpty from "is-empty";
import { useEffect, useState } from "react";
import Card from "../../assets/components/common/card";
import TextInput from "../../assets/components/common/textInput";

const AddCarFirst = ({ details, onChange, next }) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    isEmpty(details.name) ||
    isEmpty(details.nationality) ||
    isEmpty(details.dob) ||
    isEmpty(details.phone) ||
    isEmpty(details.address) ||
    isEmpty(details.nin) ||
    isEmpty(details.passport) ||
    isEmpty(details.idcard)
      ? setDisabled(true)
      : setDisabled(false);
  }, [
    details.name,
    details.nationality,
    details.dob,
    details.phone,
    details.address,
    details.nin,
    details.passport,
    details.idcard,
  ]);

  return (
    <Card>
      <h2 className="uk-margin-remove-bottom">Add car</h2>
      <p className="uk-margin-remove-top uk-text-bold">Owner’s Details</p>

      <div className="uk-margin-large-top">
        <div className="uk-margin">
          <TextInput
            type="text"
            name="name"
            value={details.name}
            onChange={onChange}
            placeholder="Name of Owner"
            icon="bx:bx-user"
          />
        </div>

        <div
          className="uk-grid-small uk-child-width-1-2 uk-margin"
          data-uk-grid
        >
          <div>
            <TextInput
              type="text"
              name="nationality"
              value={details.nationality}
              onChange={onChange}
              placeholder="Nationality"
              icon="akar-icons:flag"
            />
          </div>
          <div>
            <TextInput
              type="date"
              name="dob"
              value={details.dob}
              onChange={onChange}
              placeholder="Date Of Birth"
              icon="ic:round-date-range"
            />
          </div>
        </div>

        <div className="uk-margin">
          <TextInput
            type="tel"
            name="phone"
            value={details.phone}
            onChange={onChange}
            placeholder="Phone Number"
            icon="ci:phone"
          />
        </div>

        <div className="uk-margin">
          <TextInput
            type="text"
            name="address"
            value={details.address}
            onChange={onChange}
            placeholder="Address"
            icon="ci:location"
          />
        </div>

        <div className="uk-margin">
          <TextInput
            type="text"
            name="nin"
            value={details.nin}
            onChange={onChange}
            placeholder="National Identification Number"
            icon="carbon:id-management"
          />
        </div>

        <div
          className="uk-grid-small uk-child-width-1-2 uk-margin"
          data-uk-grid
        >
          <div>
            <TextInput
              type="text"
              name="passport"
              value={details.passport}
              onChange={onChange}
              placeholder="Passport Photograph"
              icon="icon-park-outline:id-card-v"
            />
          </div>
          <div>
            <TextInput
              type="text"
              name="idcard"
              value={details.idcard}
              onChange={onChange}
              placeholder="ID Card"
              icon="ci:id-card"
            />
          </div>
        </div>

        <p className="uk-text-center">
          <button
            type="button"
            onClick={next}
            className={`uk-button uk-button-large uk-border-rounded uk-width-small ${
              disabled ? "uk-disabled" : "uk-button-primary"
            }`}
          >
            <Icon icon="akar-icons:arrow-right" fontSize="1.4rem" />
          </button>
        </p>
      </div>
    </Card>
  );
};

export default AddCarFirst;
