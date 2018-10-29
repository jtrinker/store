import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myRef = React.createRef();

    // arrow function syntax prevents us from having to manually bind (this) in a constructor
    goToStore = (e) => {
        e.preventDefault();
        const storeName = this.myRef.value.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
       return (
        <React.Fragment>
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please select a store</h2>
                <input type="text" placeholder="Store Name" ref={this.myRef} defaultValue={getFunName()} />
                <button type="submit">Visit Store</button>
            </form>
        </React.Fragment>
       )
    }
}

export default StorePicker;