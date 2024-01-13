import React from "react";
import Footer from "./Footer";
import Weather from "./Weather";

const App = () => {
  return (
    <div>
      <Weather city="Delhi" />
      <Footer />
    </div>
  );
};

export default App;
