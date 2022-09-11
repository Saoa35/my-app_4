import React from "react";
import { MyContext } from "../../Context-api/myContext";

export default class ContextEx extends React.Component {

    render() {

        return(
            <div>
                <h3>
                ContextEx

                <MyContext.Consumer>
                    {(value) => {
                        console.log(value);
                    return <span>context content!</span>
                }}   
                </MyContext.Consumer>
                </h3>
            </div>
        )
    }
}