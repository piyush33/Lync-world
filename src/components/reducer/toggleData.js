
const toggleReducer = (state = { toggleData: null }, action) => {
    switch (action.type) {
      case "TOGGLE_DATA":
        return { toggleData: action.payload };
      default:
        return state;
    }
  };
  
  export default toggleReducer;