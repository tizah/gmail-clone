import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import EmailContainer from "./Components/EmailContainer/EmailContainer";
import Widgets from "./Components/Widgets/Widgets";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Header  */}
      <div className="content">
        <Sidebar />
        {/* sidebar */}
        <EmailContainer />
        {/* main content area */}
        <Widgets />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
