import React from 'react';

class AddFishForm extends React.Component {
    name = React.createRef();
    price = React.createRef();
    status = React.createRef();
    desc = React.createRef();
    image = React.createRef();

    createFish = (e) => {
        e.preventDefault();
        const fish = {
            name: this.name.value.value,
            price: parseFloat(this.price.value.value),
            status: this.status.value.value,
            desc: this.desc.value.value,
            image: this.image.value.value
        }
        this.props.addFish(fish);
        // clear the form
        e.currentTarget.reset();
    }

    render() {
        return (
            <React.Fragment>
                <form className="fish-edit" onSubmit={this.createFish}>
                    <input name="name" type="text" placeholder="Fish Name" ref={this.name} />
                    <input name="price" type="text" placeholder="Price" ref={this.price} />
                    <select name="status" ref={this.status}>
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea name="desc" placeholder="Desc" ref={this.desc}></textarea>
                    <input name="image" type="text" placeholder="Image" ref={this.image} />
                    <button type="Submit">+ Add Fish</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddFishForm;