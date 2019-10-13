import {connect} from 'react-redux';
import View from './view';
import {charactersActions} from '../../../redux/characters';

const mapStateToProps = state => {
  return {
    isFetching: state.characters.isFetching,
    total: state.characters.total,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addCharacter: data => {
      dispatch(charactersActions.addCharacter(data));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
