import NotFound from "./pages/public/NotFound";

import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/public/Welcome";
import LoginMethod from "./pages/public/LoginMethod";
import SelectAccoutType from "./pages/public/SelectAccoutType";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Welcome />} />
      <Route path="/login_method" element={<LoginMethod />} />
      <Route path="/account_type" element={<SelectAccoutType />} />

      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
