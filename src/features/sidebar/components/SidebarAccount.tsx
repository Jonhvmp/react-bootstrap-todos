import { FunctionComponent } from "react";

const SidebarAccount: FunctionComponent = () => {
  return (
    <div className="dropdown">
      <a
        href="#"
        className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        id="dropdownUser2"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/adam-marianowski.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-2"
        />
        <strong>Adam</strong>
      </a>
      <ul
        className="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <a className="dropdown-item" href="#">
            New project...
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Settings
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Profile
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a className="dropdown-item" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarAccount;
