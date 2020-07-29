export default function (state = {}, action) {
  switch (action.type) {
    case "REQUEST":
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
