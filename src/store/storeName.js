
const initialState = {
  names: [],
};

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD":
      let temp = [...state.names]
      temp.push(action.payload)
      return {...state, names: temp,};
  }
  return state;
};

export default reducer;
