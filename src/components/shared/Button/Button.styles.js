import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  button: {
    width: '100%',
    height: 35,
    backgroundColor: COLORS.dodgerBlue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(7, 84, 134, 0.2)',
  },
  text: {
    fontSize: 15,
    lineHeight: 18,
    color: COLORS.white,
  },
});
