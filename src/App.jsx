import NewProject from "./Components/NewProject";
import Sidebar from "./Components/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
    </main>
  );
}

export default App;
