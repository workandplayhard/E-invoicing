import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  section: {
    marginTop: 25,
    backgroundColor: COLORS.white,
    padding: 25,
  },
  title: {
    alignSelf: 'flex-end',
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.dodgerBlue,
  },
  singleField: {
    marginTop: 15,
  },
  control: {
    marginBottom: 0,
  },
  controlLabel: {
    color: '#BBBBBB',
  },
});
