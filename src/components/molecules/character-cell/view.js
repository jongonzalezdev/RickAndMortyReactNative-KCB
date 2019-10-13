import React from 'react';
import {TouchableOpacity, Image, Text, Dimensions, View} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class CharacterCell extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {character, onPress} = this.props;
    const name = _.get(character, 'name');
    const image = _.get(character, 'image');
    const windowWidth = Dimensions.get('window').width - 12;
    const imgSize = windowWidth / 2;

    return (
      <TouchableOpacity
        style={{marginHorizontal: 3, marginVertical: 3}}
        onPress={onPress}>
        <Image
          source={{uri: image}}
          style={{width: imgSize, height: imgSize, borderRadius: 10}}
        />
        <View style={styles.nameBox}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CharacterCell.defaultProps = {
  onPress: () => {},
};

CharacterCell.propTypes = {
  character: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};

export default CharacterCell;
