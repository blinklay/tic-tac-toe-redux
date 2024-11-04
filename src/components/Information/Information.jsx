import { store } from "../../store";

export default function Information() {
  const { getState } = store;
  const { currentStep } = getState();

  return <div>Текущий ход - {currentStep}</div>;
}
