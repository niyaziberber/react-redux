import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { storeCake } from "../redux/cake/cakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button onClick={props.storeCake}>Store Cake</button>
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
    storeCake: () => dispatch(storeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
