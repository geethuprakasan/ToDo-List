const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newState = [...state, action.payload];
      return newState;

    case "ADD_TASKS_LIST":
      return action.payload;

    case "CHANGE_STATUS":
      const task = {
        ...state.find((task) => task.id === action.payload.id),
      };
      task.status = action.payload.status;
      return state.filter((task) => task.id !== action.payload.id).concat(task);

    default:
      return state;
  }
};

export default todoReducer;
