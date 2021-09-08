const intitialState = {
  list: [],
  activeId: null,
};

const hobbyReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case "SET_ACTIVE_HOBBY": {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }
    default:
      return state;
  }
};
export default hobbyReducer;
