import React from "react";
import { MyContext } from "../../Context-api/myContext";

export default class ContextEx extends React.Component {

    render() {

        return(
            <div>
                <h3>
                ContextEx
                </h3>
                
                <MyContext.Consumer>
                    {(value) => {
                        console.log(value);
                    return <span>context content!</span>
                }}   
                </MyContext.Consumer>
                
            </div>
        )
    }
}