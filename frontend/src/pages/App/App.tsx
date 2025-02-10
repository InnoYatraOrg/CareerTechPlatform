import './App.css';
import IconHome from '/src/assets/icons/navbar/icon-home.svg';
import IconConnect from '/src/assets/icons/navbar/icon-connect.png';
import IconJobs from '/src/assets/icons/navbar/icon-jobs.svg';
import IconLessons from '/src/assets/icons/navbar/icon-lessons.png';
import IconNotification from '/src/assets/icons/navbar/icon-notification.svg';
import searchIcon from '/src/assets/icons/navbar/icon-search.svg'; 
import messageIcon from '/src/assets/icons/navbar/icon-message.svg'; 
import profileIcon from '/src/assets/icons/navbar/pick-profile.png';

import NavItem from '../../components/NavItem';

function Navigation() {
  return (
    <nav>
      <ul>
        <NavItem className="home" icon={IconHome} label="Home" />
        <NavItem className="connect" icon={IconConnect} label="Connect" />
        <NavItem className="jobs" icon={IconJobs} label="Jobs" />
        <NavItem className="lessons" icon={IconLessons} label="Lessons" />
        <NavItem className="notification" icon={IconNotification} label="Notifications" />
        <NavItem className="message" icon={messageIcon} label="" />
        <NavItem className="profilePic" icon={profileIcon} label="" />
      </ul>
    </nav>
  );
}

function App() {
  return (
    <nav className="Navbar">
      <div className="logo">Logo</div>
      <div className="search-container">
        <img className="searchimg" src={searchIcon} alt="Search" width="10" height="10"/>
        <input type="text" placeholder="Search" />
      </div>
      <Navigation />
    </nav>
  );
}

export default App;
