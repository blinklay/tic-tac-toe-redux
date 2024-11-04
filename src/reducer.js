export const initialState = {
  currentStep: "cross",
  field: new Array(9).fill("")
}

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "STEP":
      return {
        field: state.field.map((cell, index) => {
          if (index === payload) return state.currentStep
          return cell
        }),
        currentStep: state.currentStep === "cross" ? "zero" : "cross"
      }

    default:
      return state
  }
}