import { Icon } from "@iconify/react";
import styles from "./styles.module.scss";

const TextInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  icon,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Icon icon={icon} />
      </div>
      <div className={styles.inputDiv}>
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className={`uk-input uk-height-1-1 ${styles.input}`}
        />
      </div>
    </div>
  );
};

export default TextInput;
