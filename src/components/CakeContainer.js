import React from "react";
import {connect} from 'react-redux'
import { buyCake } from "../redux";
import HooksCakeContainer from "./HooksCakeContainer";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes -  {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>

    </div>
  );
}

//to access redux state and pass it to component's state
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//to reach redux actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);

