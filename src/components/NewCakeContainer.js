import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { storeCake } from "../redux/cake/cakeActions";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
    storeCake: () => dispatch(storeCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
