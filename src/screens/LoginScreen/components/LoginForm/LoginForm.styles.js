import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  form: {
    padding: 25,
  },
  title: {
    alignSelf: 'center',
    fontSize: 17,
    lineHeight: 21,
    marginBottom: 25,
  },
  input: {
    backgroundColor: COLORS.white,
    borderBottomWidth: 0,
    borderWidth: 1,
    borderColor: COLORS.mercury,
    borderRadius: 10,
    height: 45,
    paddingBottom: 0,
    paddingHorizontal: 8,
  },
  link: {
    alignSelf: 'flex-end',
  },
  button: {
    alignSelf: 'center',
    width: 115,
    marginTop: 25,
  },
});
