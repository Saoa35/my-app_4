import React from "react";


export default class RefsEx extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        console.log(this.myRef.current.textContent);
    }

    handleChange() {
        console.log(this.inputRef.current.value);
    }

    render() {

        // console.log(this.myRef);

        return(
            <div>
                <h2 ref={this.myRef}>
                    Refs Example
                </h2>

                <input type='text' ref={this.inputRef} onChange={this.handleChange}/>
            </div>
        )
    }
}