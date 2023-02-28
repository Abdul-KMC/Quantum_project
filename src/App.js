import "./App.css";
import LoginSignupPage from "./Pages/login";
import RegistrationPage from "./Pages/registration";
import Table from "./Pages/table";

function App() {
  return (
    <div className="App">
      <LoginSignupPage />
      <RegistrationPage />
      <Table />
    </div>
  );
}

export default App;
