import {connect} from 'react-redux';
import View from './view';
import {charactersActions} from '../../../redux/characters';

const mapStateToProps = state => {
  return {
    charactersList: state.characters.list,
    isFetching: state.characters.isFetching,
    total: state.characters.total,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initCharactersList: () => {
      dispatch(charactersActions.initCharactersList());
    },
    updateCharactersListPage: () => {
      dispatch(charactersActions.updateCharactersListPage());
    },
    updateSelectedCharacter: character => {
      dispatch(charactersActions.updateItem(character));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
