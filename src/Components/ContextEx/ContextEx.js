import React from "react";
import { MyContext } from "../../Context-api/myContext";
import ContextEx2 from "../ContextEx 2/ContextEx 2";

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

                <ContextEx2/>
                
            </div>
        )
    }
}