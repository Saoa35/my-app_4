import React from "react";


export default class RefsEx extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.myRef.current.textContent);
    }

    render() {

        // console.log(this.myRef);

        return(
            <div>
                <h2 ref={this.myRef}>
                    Refs Example
                </h2>

                <input type='text' ref={this.inputRef}/>
            </div>
        )
    }
}