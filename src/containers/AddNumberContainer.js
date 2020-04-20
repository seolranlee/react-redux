import AddNumber from "../components/AddNumber";
import { connect } from "react-redux";
function mapReduxDispatchToReactProps(dispatch) {
  return {
    onClick: function(size) {
      dispatch({ type: "INCREMENT", size });
    }
  };
}

export default connect(
  null,
  mapReduxDispatchToReactProps
)(AddNumber);
// class AddNumberContainer extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={size => {
//           store.dispatch({ type: "INCREMENT", size });
//         }}
//       />
//     );
//   }
// }

// export default AddNumberContainer;
