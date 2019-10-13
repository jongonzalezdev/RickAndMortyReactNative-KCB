import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  nameBox: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    right: 0,
    left: 0,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
