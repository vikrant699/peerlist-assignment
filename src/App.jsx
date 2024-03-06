import Candidates from "./components/Jira";
import Sidebar from "./components/Sidebar";
import JobDetails from "./components/JobDetails";

function App() {
  return (
    <div className="flex lg:mx-64 xs:mx-0">
      <div>
        <Sidebar />
      </div>
      <div className="border-l border-solid ml-[212px]">
        <div className="border-b border-solid fixed top-0">
          <JobDetails />
        </div>
        <div className="mt-[176px]">
          <Candidates />
        </div>
      </div>
    </div>
  );
}

export default App;
