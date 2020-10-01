import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { storeCake } from "../redux/cake/cakeActions";

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of item - {props.item}</h2>
    </div>
  );
}

//to access redux state and pass it to component's state
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    item: itemState,
  };
};

//to reach redux actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    storeCake: () => dispatch(storeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
