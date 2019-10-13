import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {CharacterCell} from '../../molecules';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import color from '../../../assets/colors';

class Characters extends React.Component {
  componentDidMount() {
    this.props.initCharactersList();
  }

  _renderItem = ({item}) => (
    <CharacterCell
      character={item}
      onPress={() => this._onCharacterTapped(item)}
    />
  );

  _onEndReached = ({distanceFromEnd}) => {
    const {isFetching, charactersList, total} = this.props;
    const onEndReached =
      distanceFromEnd > 100 && !isFetching && charactersList.length < total;
    if (onEndReached) {
      this.props.updateCharactersListPage();
    }
  };

  _onCharacterTapped = character => {
    this.props.updateSelectedCharacter(character);
    const title = _.get(character, 'name');
    Actions.CharacterDetail({title});
  };

  render() {
    const {charactersList, total, isFetching} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={charactersList}
          renderItem={this._renderItem}
          keyExtractor={item => `character-${item.id}`}
          extraData={this.props}
          numColumns={2}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.initCharactersList}
              tintColor={color.white}
              colors={[color.white]}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Characters;
