import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  input: {
    width: '100%',
    position: 'relative',
  },
  startAdornment: {
    position: 'absolute',
    top: 12,
    left: 14,
    zIndex: 1,
  },
  endAdornment: {
    position: 'absolute',
    top: 12,
    right: 14,
    zIndex: 1,
  },
  field: {
    width: '100%',
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderBottomColor: COLORS.dustyGray,
    textAlign: 'right',
    justifyContent: 'center',
  },
});
