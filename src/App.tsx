import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { CrownsListPage } from "./components/pages/CrownsListPage";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CrownsListPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
