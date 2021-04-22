const initialState = {
  login: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        login: true,
        token: action.payload?.token,
      };
    case "LOGOUT":
      return {
        login: false,
      };

    default:
      return state;
  }
};

export default authReducer;
