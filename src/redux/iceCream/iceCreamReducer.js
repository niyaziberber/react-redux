import { BUY_ICE_CREAM } from "./iceCreamTypes";

const intialIceCreamState = {
  numOfIceCreams: 40,
};

const iceCreamReducer = (state = intialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
