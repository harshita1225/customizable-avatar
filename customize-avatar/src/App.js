import "./App.css";
import Avatar from "./components/avatar";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "salmon" }}>Customize Avatar</h1>
      <Avatar src="https://picsum.photos/400/400" size="l" type="rounded" />
    </div>
  );
}

export default App;
