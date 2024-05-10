export const toggleData = (toggleData) => {
    return {
      type: "TOGGLE_DATA",
      payload: toggleData ,
    };
  };

  export const showTrash = (isOpen) => {
    return {
      type: "SHOW_TRASH",
      payload: isOpen ,
    };
  };