import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  item: {
    width: 205,
    paddingVertical: 25,
    backgroundColor: '#78BEFE40',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 15,
  },
  icon: {
    width: 50,
    height: 50,
  },
  text: {
    marginTop: 24,
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.dodgerBlue,
    textAlign: 'center',
  },
});
