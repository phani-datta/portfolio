import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

function App() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <Main />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
