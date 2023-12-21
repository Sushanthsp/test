import React, { Suspense, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import Home from "./Home";
import Test from "./Test";

const Remote = React.lazy(() => import("child/App"));

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/remote">Remote</Link>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Header />
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route
            path="/home"
            element={<Home loading={loading} setLoading={setLoading} />}
          />
          <Route path="/test" element={<Test />} />
          <Route path="/remote" element={<Remote />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
