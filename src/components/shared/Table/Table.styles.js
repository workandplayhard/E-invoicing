import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  tableWrapper: {},
  table: {
    flexDirection: 'column',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.mercury,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderColor: COLORS.mercury,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: COLORS.aquaSpring,
  },
  headerCell: {
    height: '100%',
    backgroundColor: COLORS.aquaSpring,
  },
  firstHeaderCell: {
    borderTopLeftRadius: 10,
  },
  lastHeaderCell: {
    borderTopRightRadius: 10,
  },
  headerText: {
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
  body: {
    flexDirection: 'column',
  },
  row: {
    borderTopWidth: 1,
    borderTopColor: COLORS.mercury,
    minHeight: 40,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    justifyContent: 'flex-end',
  },
  firstRow: {
    borderTopWidth: 0,
  },
  lastRow: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
