import "./App.css";
import Avatar from "./components/avatar";
import Avatar2 from "./components/allAvatar";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "salmon" }}>Customize Avatar</h1>
      <Avatar src="https://picsum.photos/400/400" size="l" type="rounded" />
      <Avatar2 src="https://picsum.photos/400/400" />
    </div>
  );
}

export default App;
