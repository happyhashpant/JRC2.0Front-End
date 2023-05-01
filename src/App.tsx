import BusinessForm from "./components/private/business/BusinessForm";
import Landing from "./components/public/Landing";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/business">
          <Route path="new" index element={<BusinessForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
