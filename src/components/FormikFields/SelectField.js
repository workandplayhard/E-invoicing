import React from 'react';

import { Select } from 'components/shared/Select';

const SelectField = props => <Select {...props} />;

export default React.memo(SelectField);
