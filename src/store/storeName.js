
const initialState = {
  names: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD":
      let temp = [...state.names];
      temp.push(action.payload);
      state.names = [...temp];
      return { ...state, names: temp };
    case "DELETE":
      let temp2 = [...state.names];
      temp2.splice(action.index, 1);
      state.names = [...temp2];
      return { ...state, names: temp2 };
  }
  return state;
};

export default reducer;
