import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <header>
      <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <Icon icon="carbon:user-avatar-filled-alt" fontSize="2rem" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
