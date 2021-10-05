import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import isEmpty from "is-empty";

const SearchBar = ({ path, placeholder }) => {
  const [query, setQuery] = useState("");

  const history = useHistory();
  const { search } = useLocation();

  const q = new URLSearchParams(search);
  const qu = q.get("q");

  useEffect(() => {
    !!qu && setQuery(qu);
  }, [qu]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEmpty(query)) {
      history.push(`/search/${path}?q=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.search}>
          <Icon icon="eva:search-outline" />
        </div>
        <div className={styles.inputDiv}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            spellCheck={false}
            className={`uk-input uk-height-1-1 ${styles.input}`}
          />
        </div>
        <button className={`shrink-on-click ${styles.button}`}>
          <Icon icon="akar-icons:arrow-right" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
