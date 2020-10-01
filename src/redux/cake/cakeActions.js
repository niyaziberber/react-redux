import { BUY_CAKE } from "./cakeTypes";
import { STORE_CAKE } from "./cakeTypes";

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  };
};

export const storeCake = () => {
  return {
    type: STORE_CAKE,
    
  };
};
