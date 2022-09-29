import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  cell: {
    minHeight: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.mercury,
  },
  text: {
    fontSize: 15,
    lineHeight: 24,
    textAlign: 'center',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
