import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  info: {
    padding: 25,
    backgroundColor: COLORS.white,
  },
  title: {
    alignSelf: 'flex-end',
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.dodgerBlue,
  },
  inner: {
    marginTop: 25,
  },
});
