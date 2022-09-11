import React from "react";


export default class RefsEx extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {

        return(
            <div>
                Refs Example
            </div>
        )
    }
}