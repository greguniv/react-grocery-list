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
        quantity: 1,
        price: 0.55,
        isPurchased: false,
    },
    {
        item: 'Liquid Dishwashing Soap',
        brand: 'Dawn',
        units: '28 fl oz',
        quantity: 1,
        price: 3.99,
        isPurchased: false,
    },
];
// console.log(groceries)

class App extends React.Component {
    state = {
        products: groceries,
        item: '',
        brand: '',
        units: '',
        quantity: 0,
        price: 0,
        isPurchased: false,
    }

    render() {
        return <h1>Hello, we're up and running!</h1>,
            <div>
                <ul>
                    {
                        this.state.products.map(item => {
                            return (
                                <li>{item.item} {item.quantity} {item.units}</li>
                            )
                        })
                    }
                </ul>
            </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)