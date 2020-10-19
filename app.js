/* Part 1 */
// const GroceryList = () => (
//   <ul>
//     <li>Eggs</li>
//     <li>Milk</li>
//   </ul>
// );
//
/* Part 2 */
// const GroceryList = () => (
//   <ul>
//     <Eggs />
//     <Milk />
//   </ul>
// );

// const Eggs = () => ( 
//   <li>Eggs</li>
// );

// const Milk = () => (
//   <li>Milk</li>
// );
//
/* Part 3 */
// const GroceryList = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryListItem items={['Eggs', 'Milk']}/>
//   </div>
// );

// const GroceryListItem = (props) => (
//   <ul>
//     <li>{props.items[0]}</li>
//     <li>{props.items[1]}</li>
//   </ul>
// );
//
/* Part 4 */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
};

const GroceryList = (props) => (
  <ul>
    <GroceryListItem item={'Eggs'}/>
    <GroceryListItem item={'Milk'}/>
  </ul>
);

ReactDOM.render(<GroceryList />, document.getElementById('app'));
