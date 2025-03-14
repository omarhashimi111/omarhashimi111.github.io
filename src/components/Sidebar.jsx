import { useNavigate, NavLink } from "react-router";

const Sidebar = ({ links, onLinkClick }) => {

  return (
    <div className="flex flex-col gap-2 pt-2">
      {links.map((li) => (
        <NavLink
          key={li.name}
          to={li.link}
          className={({isActive})=>`hover:bg-hbg text-left p-1 hover:shadow-inner  w-full
            ${isActive && "bg-hbg font-bold shadow-lg"
            }`}
          onClick={() => onLinkClick(li.link)}
        >
          {li.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
