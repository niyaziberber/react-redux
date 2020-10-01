import { BUY_CAKE } from "./cakeTypes";
import { STORE_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

export const storeCake = () => {
  return {
    type: STORE_CAKE,
  };
};




