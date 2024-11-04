import { useState } from "react";
import { store } from "../../store";
import Cell from "../Cell/Cell";
import styled from "./Field.module.css";

export default function Field() {
  const [isRefresh, setIsRefresh] = useState(false);
  const refreshPage = () => setIsRefresh(!isRefresh);

  const { getState, dispatch } = store;
  const { field } = getState();

  const onStep = (index) => {
    dispatch({ type: "STEP", payload: index });
    refreshPage();
  };

  return (
    <div className={styled.field}>
      {field.map((cell, index) => (
        <Cell onClick={() => onStep(index)} key={index} text={cell} />
      ))}
    </div>
  );
}
