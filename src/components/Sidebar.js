import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar({ links, close }) {
  return (
    <div className="sidebar" onClick={close}>
      {links.map(link => (
        <NavLink
          to={link.path}
          end={link.end}
          key={link.name}
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          <FontAwesomeIcon icon={link.icon} />
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
