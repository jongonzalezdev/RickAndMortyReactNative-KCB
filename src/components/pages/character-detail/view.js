import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  Image,
  Dimensions,
  View,
} from 'react-native';
import _ from 'lodash';
import styles from './styles';

class CharacterDetail extends React.Component {
  render() {
    const imgSize = Dimensions.get('window').width - 20;
    const character = this.props.character;
    const image = _.get(character, 'image');
    const name = _.get(character, 'name');
    const status = _.get(character, 'status');
    const species = _.get(character, 'species');
    const origin = _.get(character, 'origin.name');
    const gender = _.get(character, 'gender');
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Image
            source={{uri: image}}
            style={{
              width: imgSize,
              height: imgSize,
              marginTop: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
          />
          <Text style={styles.name}>{name}</Text>
          <View>
            <View style={styles.info}>
              <Text style={styles.text}>{'Status'}: </Text>
              <Text style={styles.text}>{status}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>{'Gender'}: </Text>
              <Text style={styles.text}>{gender}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>{'Species'}: </Text>
              <Text style={styles.text}>{species}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.text}>{'Origin'}: </Text>
              <Text style={styles.text}>{origin}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CharacterDetail;
