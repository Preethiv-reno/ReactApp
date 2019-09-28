import React from "react";

const Samplecomp = (props) => {

    console.log(JSON.stringify(props.movies));

    return(
        <div>
            <h3>{props.loading}</h3>
            <button onClick={() => props.dispatchername("Happy Hacking Code")}>State Change</button>
        </div>
    );
};

export default Samplecomp;