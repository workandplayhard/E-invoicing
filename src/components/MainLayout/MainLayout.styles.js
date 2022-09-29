import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    height: 87,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: COLORS.dodgerBlue,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    marginBottom: 10,
    color: COLORS.white,
    fontSize: 17,
    lineHeight: 21,
  },
  inner: {
    flex: 1,
    marginBottom: 40,
  },
});
