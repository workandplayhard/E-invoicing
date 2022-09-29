import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.dodgerBlue,
  },
  icon: {
    width: 14,
    height: 14,
    color: COLORS.dodgerBlue,
  },
  text: {
    marginLeft: 5,
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.dodgerBlue,
  },
});
