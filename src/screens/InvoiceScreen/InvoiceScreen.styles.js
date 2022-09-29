import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginTop: 25,
    color: COLORS.dodgerBlue,
    fontSize: 20,
    lineHeight: 24,
  },
  inner: {},
  main: {},
  infoItem: {
    marginTop: 25,
  },
  actions: {
    paddingVertical: 30,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F2FF',
  },
  action: {
    width: 115,
    marginHorizontal: 7,
  },
});
