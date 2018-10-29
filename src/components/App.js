import React from 'react';
import StorePicker from './StorePicker';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    // set initial state
    state = {
        fishes: {},
        order: {}
    }

    loadSamples = () => {
        this.setState({ fishes: sampleFishes });
    }

    addFish = (fish) => {
        const fishes = { ...this.state.fishes };
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes: fishes });
    }

    render() {
        return (
            <React.Fragment>
                <div className="catch-of-the-day">
                    <div className="menu">
                        <Header tagline="Fresh Seafood" />
                        <ul className="fishes">
                            <Fish />
                        </ul>
                    </div>
                    <Order />
                    <Inventory loadSamples={this.loadSamples} addFish={this.addFish} />
                </div>
            </React.Fragment>
        )
    }
}

export default App;