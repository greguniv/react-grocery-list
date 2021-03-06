const groceries = [
    {
        item: 'Paper Towels',
        brand: 'Kroger',
        units: '36 Rolls',
        quantity: 1,
        price: 18.99,
        isPurchased: false,
    },
    {
        item: 'Mac n Cheese',
        brand: 'Kroger',
        units: '7.25 oz',
        quantity: 3,
        price: 0.55,
        isPurchased: true,
    },
    {
        item: 'Liquid Dishwashing Soap',
        brand: 'Dawn',
        units: '28 fl oz',
        quantity: 1,
        price: 3.99,
        isPurchased: false,
    },
    {
        item: 'Dry Cat Food',
        brand: 'IAMS',
        units: '16 lb',
        quantity: 2,
        price: 25.99,
        isPurchased: true,
    }
];
// console.log(groceries)

class Container extends React.Component {

    state = {
        products: groceries,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            item: this.state.item,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: true,
        }

        console.log(newItem)

        this.setState({
            products: [newItem, ...this.state.products]
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Don't Forget to Get These!</h1>

                    <div id="form-submission">
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='Item'>Item:</label>
                            <input id='item' type='text' value={this.state.item} onChange={this.handleChange} />
                            <label htmlFor='units'>Units:</label>
                            <input id='units' type='text' value={this.state.units} onChange={this.handleChange} />
                            <label htmlFor='quantity'>Quantity:</label>
                            <input id='quantity' type='text' value={this.state.quantity} onChange={this.handleChange} />
                            <input type='submit' />
                        </form>
                    </div>
                </div>

                <div id="container">
                    <div id="grocery-list">
                        <ul>
                            {
                                this.state.products.map(item => {
                                    return (
                                        <div>
                                            <li>{item.item} {item.units} {item.quantity}</li>
                                        </div>
                                    )
                                })
                            }
                            <div id="purchased-items">
                                {
                                    this.state.products.map(groceries => {
                                        return (
                                            <p>{
                                                groceries.isPurchased
                                                    ? <p>We purchased this so far : 
                                                        {groceries.item}</p>
                                                    : null
                                            }</p>
                                        )
                                    }
                                    )
                                }
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Container />
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)