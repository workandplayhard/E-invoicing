import React from 'react';
import { View } from 'react-native';

import SearchIcon from 'assets/icons/magnifying-glass.svg';

import { Input } from 'components/shared/Input';

import styles from './SearchInput.styles';

const SearchInput = ({ onChange }) => (
  <View style={styles.input}>
    <Input
      placeholder="بحث"
      startAdornment={<SearchIcon style={styles.icon} />}
      startAdornmentStyle={styles.fieldStartAdornment}
      onChange={onChange}
    />
  </View>
);

export default React.memo(SearchInput);
