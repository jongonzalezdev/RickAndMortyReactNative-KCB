import {StyleSheet} from 'react-native';
import color from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.main,
  },
  name: {
    color: color.white,
    textAlign: 'center',
    fontSize: 40,
    paddingTop: 10,
    paddingBottom: 20,
    fontFamily: 'Helvetica',
  },
  info: {
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: color.white,
    fontFamily: 'Helvetica',
  },
  image: {
    padding: 10,
  },
});
