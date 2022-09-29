import React from 'react';

import { FilterButton } from '../FilterButton';
import { SearchInput } from '../SearchInput';

const Filters = ({ onSearchQueryChange, onFilterBtnPress }) => (
  <>
    <FilterButton onPress={onFilterBtnPress} />
    <SearchInput onChange={onSearchQueryChange} />
  </>
);

export default React.memo(Filters);
