import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="inventory">
                    <h2>Inventory</h2>
                    <AddFishForm addFish={this.props.addFish} />
                    <button onClick={this.props.loadSamples}>Load Sample Fish</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Inventory;