import {connect} from 'react-redux';
import View from './view';

const mapStateToProps = state => {
  return {
    character: state.characters.item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
