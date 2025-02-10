const NavItem: React.FC<{ className: string; icon: string; label: string }> = ({ className, icon, label }) => {
  return (
    <li>
      <img className={className} src={icon} alt={label} />
      <div>{label}</div>
    </li>
  );
};

export default NavItem;
