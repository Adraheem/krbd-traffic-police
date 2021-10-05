import { useState } from "react";
import AddCarFirst from "./page1";
import AddCarSecond from "./page2";

const AddCarPage = () => {
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState({
    name: "",
    nationality: "",
    dob: "",
    phone: "",
    address: "",
    nin: "",
    passport: "",
    idcard: "",
    model: "",
    plate: "",
    color: "",
    date_of_purchase: "",
    spec: "",
    card: "",
    exp: "",
    cvv: "",
    bvn: "",
    bank_name: "",
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
      {page === 1 ? (
        <AddCarFirst
          details={details}
          onChange={handleChange}
          next={() => setPage(2)}
        />
      ) : (
        <AddCarSecond
          details={details}
          onChange={handleChange}
          back={() => setPage(1)}
          submit={handleSubmit}
        />
      )}
    </div>
  );
};

export default AddCarPage;
