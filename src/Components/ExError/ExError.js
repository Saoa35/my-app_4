import React from "react";

export default class ExError extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isError: false
        }
        // this.handleCreateError = this.handleCreateError.bind(this);
    }

    render() {

        return(
            <div>
                <h2>Example Error</h2>
                <p>
                    <button>
                        Create Error
                    </button>
                </p>
            </div>
        )
    }
}