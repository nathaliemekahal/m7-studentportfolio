export default function (state = {}, action) {
  switch (action.type) {
    case "GET_STUDENT_LIST":
      return {
        ...state,
        list: state.list.concat(action.payload),
      };

    default:
      return state;
  }
}
