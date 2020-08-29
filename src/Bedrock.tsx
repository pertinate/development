import React, { Component, ReactNode } from 'react';

interface Props { }
interface State { }

class Bedrock extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {

        };
    }

    render(): ReactNode {
        return (
            <div>Hello World</div>
        );
    }
}

export default Bedrock;
