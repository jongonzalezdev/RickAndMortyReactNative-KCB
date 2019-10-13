import {StyleSheet} from 'react-native';
import color from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: color.main,
    flex: 1,
  },
  field: {
    padding: 15,
  },
  text: {
    color: color.white,
    fontSize: 18,
    fontFamily: 'Helvetica',
    marginBottom: 5,
  },
  inputView: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
  },
  input: {
    margin: 10,
    color: 'rgba(255,255,255,0.9)',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255, 0.6)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: 'black',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
