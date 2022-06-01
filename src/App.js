import "./App.css";
import Profile from "./profile/Profile";
import image from "./profile/pic.jpg";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="Karim Chebbi"
        bio="Hi im Karim 29 years old and im a Fullstack Js Developper"
        profession="Web Developper"
      >{image}</Profile> 
    </div>
  );
}

export default App;
