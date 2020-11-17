
export const initialState = {
    user: null,
    address: null,
    bedroom:null,
    bathroom: null,
    description:null,
    images:null,
  };
  
  export const actionTypes = {
    SET_USER: "SET_USER",
    SET_ADDRESS: "SET_ADDRESS",
    SET_BEDROOM: "SET_BEDROOM",
    SET_BATHROOM: "SET_BATHROOM",
    SET_DESCRIPTION: "SET_DESCRIPTION",
    SET_IMAGES: "SET_IMAGES",

  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_USER:
        return { ...state, user: action.user };
      case actionTypes.SET_ADDRESS:
        return { ...state, address: action.address };
      case actionTypes.SET_BEDROOM:
        return { ...state, bedroom: action.bedroom };
      case actionTypes.SET_BATHROOM:
        return { ...state, bathroom: action.bathroom };
      case actionTypes.SET_DESCRIPTION:
        return { ...state, description: action.description };
      case actionTypes.SET_IMAGES:
        return { ...state, images: action.images };
      default:
        return state;
    }
  };