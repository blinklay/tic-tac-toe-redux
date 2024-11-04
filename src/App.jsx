import { useState } from "react";
import Field from "./components/Field/Field";
import Information from "./components/Information/Information";
import Reload from "./Reload/Reload";
import { store } from "./store";
import { useEffect } from "react";

function App() {
  const { getState } = store;
  const { field } = getState;

  return (
    <>
      <Information />
      <Field />
      <Reload />
    </>
  );
}

export default App;
