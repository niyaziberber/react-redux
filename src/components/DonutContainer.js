import React from "react";
import {connect} from 'react-redux'
import { buyDonut } from "../redux";

function DonutContainer(props) {
  return (
    <div>
      <h2>Number of donut -  {props.numOfDonuts}</h2>
      <button onClick={props.buyDonut}>Buy Cake</button>

    </div>
  );
}

//to access redux state and pass it to component's state
const mapStateToProps = (state) => {
  return {
    numOfDonuts: state.donut.numOfDonuts,
  };
};

//to reach redux actions
const mapDispatchToProps = (dispatch) => {
  return {
    buyDonut: () => dispatch(buyDonut()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DonutContainer);

