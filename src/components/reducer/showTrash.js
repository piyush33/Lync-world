const trashReducer = (state = { showTrash: null }, action) => {
    switch (action.type) {
      case "SHOW_TRASH":
        return { showTrash: action.payload };
      default:
        return state;
    }
  };
  
  export default trashReducer;