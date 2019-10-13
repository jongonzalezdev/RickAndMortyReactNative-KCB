import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Text,
  View,
} from 'react-native';
import styles from './styles';

class CharacterAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: '',
      gender: '',
      species: '',
      origin: '',
    };
  }

  _onSubmit = () => {
    const {isFetching} = this.props;
    const {name, status, gender, species, origin} = this.state;
    if (isFetching) {
      return;
    }

    if (
      name === '' ||
      status === '' ||
      gender === '' ||
      species === '' ||
      origin === ''
    ) {
      alert('All fields must be filled');
      return;
    }

    const id = Date.now();

    const data = {
      id: id,
      name: name,
      status: status,
      gender: gender,
      species: species,
      origin: {name: origin},
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    };

    this.props.addCharacter(data);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.field}>
          <Text style={styles.text}>{'Name:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={this.state.name}
              onChangeText={name => this.setState({name})}
              placeholder={'Name'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>{'Status:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={this.state.status}
              onChangeText={status => this.setState({status})}
              placeholder={'Status'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>{'Gender:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={this.state.gender}
              onChangeText={gender => this.setState({gender})}
              placeholder={'Gender'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>{'Species:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={this.state.species}
              onChangeText={species => this.setState({species})}
              placeholder={'Species'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.text}>{'Origin:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={this.state.origin}
              onChangeText={origin => this.setState({origin})}
              placeholder={'Origin'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._onSubmit}>
          <Text style={styles.buttonLabel}>{'Add'}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default CharacterAdd;
