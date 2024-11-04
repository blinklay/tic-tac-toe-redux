import styled from "./Cell.module.css";
export default function Cell({ text, onClick }) {
  return (
    <button onClick={onClick} className={styled.cell}>
      {text}
    </button>
  );
}
