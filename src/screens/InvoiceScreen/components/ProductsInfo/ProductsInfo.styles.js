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
    marginTop: 40,
    paddingHorizontal: 35,
    alignItems: 'center',
  },
  header: {
    position: 'relative',
    top: 15,
    borderRadius: 10,
    backgroundColor: COLORS.dodgerBlue,
    paddingVertical: 8,
    paddingHorizontal: 25,
    zIndex: 1,
  },
  headerText: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.white,
  },
  item: {
    backgroundColor: '#E5F2FF',
    borderRadius: 10,
    paddingTop: 25,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  itemDescription: {
    alignSelf: 'flex-end',
    fontSize: 13,
    lineHeight: 16,
  },
  itemRow: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 12,
    lineHeight: 14,
  },
  itemValue: {
    fontSize: 12,
    lineHeight: 14,
    color: '#818181',
  },
  prevArrow: {
    left: -50,
    width: 12,
    height: 21,
  },
  nextArrow: {
    right: -50,
    width: 12,
    height: 21,
  },
});
