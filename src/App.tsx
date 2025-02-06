import './App.css';
import IconHome from './Icons/Icon-home.svg';
import IconConnect from './Icons/Icon-connect.png';
import IconJobs from './Icons/Icon-jobs.svg';
import IconLessons from './Icons/Icon-lessons.png';
import IconNotification from './Icons/Icon-notification.svg';
import searchIcon from './Icons/Icon-search.svg'; // Updated path to the search icon
import messageIcon from './Icons/Icon-message.svg'; 
import profileIcon from './Icons/pick-profile.png';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <img src={IconHome} alt="Home" />
          <div>Home</div>
        </li>
        <li>
          <img className="Connect"src={IconConnect} alt="Connect" />
          <div>Connect</div>
        </li>
        <li>
          <img src={IconJobs} alt="Jobs" />
          <div>Jobs</div>
        </li>
        <li>
          <img className="lessons" src={IconLessons} alt="Lessons" />
          <div>Lessons</div>
        </li>
        <li>
          <img src={IconNotification} alt="Notifications" />
          <div>Notifications</div>
        </li>
        <li className="Message" >
          <img src={messageIcon} alt="Message" />
        </li>
        <li >
          <img  className="profilePic" src={profileIcon} alt="Profile" /> {/* Enlarged profile image */}
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="Navbar">
      <div className="logo">Logo</div>
      <div className="search-container">
        <img className="searchimg" src={searchIcon} alt="Search" width="15" height="15" />
        <input type="text" placeholder="Search" />
      </div>
      <Navigation />
    </div>
  );
}

export default App;