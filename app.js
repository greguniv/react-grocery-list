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

class App extends React.Component {
    // state = {}

    render() {
        return <h1>Hello, we're up and running!</h1>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)