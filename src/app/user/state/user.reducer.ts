export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_LOGIN_USERNAME':
      return {
        ...state,
        maskUser: action.mask,
      };
    default:
      return state;
  }
}
