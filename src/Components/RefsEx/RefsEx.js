import React from "react";


export default class RefsEx extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.inputRef = React.createRef();
        this.scrollRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidMount() {
        console.log(this.myRef.current.textContent);
        // this.inputRef.current.focus();
    }

    handleChange() {
        console.log(this.inputRef.current.value);
    }

    handleFocus() {
        // this.inputRef.current.focus();
        this.scrollRef.current.scrollIntoView({
            behavior: 'smooth'
    });
    }

    render() {

        // console.log(this.myRef);

        return(
            <div>
                <h2 ref={this.myRef}>
                    Refs Example
                </h2>

                <input type='text' ref={this.inputRef} onChange={this.handleChange}/>

                <button onClick={this.handleFocus}>Fokus on input</button>

                <div style={{height: '150vh'}}></div>

                <h3 ref={this.scrollRef}>Scroll here!</h3>
            </div>
        )
    }
}