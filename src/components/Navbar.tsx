import '../index.scss';
const Navbar: React.FC = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">AppLogo</div>
      <div className="navbar-items-container">
        <div className="navbar-items">Item</div>
        <div className="navbar-items">Item</div>
        <div className="navbar-items">Item</div>
      </div>
    </div>
  );
};

export default Navbar;
