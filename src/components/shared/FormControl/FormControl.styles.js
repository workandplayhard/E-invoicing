import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  control: {
    marginBottom: 25,
    alignItems: 'flex-end',
  },
  errorText: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.red,
  },
  label: {
    flexDirection: 'row',
    fontSize: 14,
    lineHeight: 17,
    marginBottom: 10,
  },
  labelRequiredMark: {
    fontSize: 14,
    lineHeight: 17,
    color: COLORS.dodgerBlue,
  },
});
