import React from 'react';

import { DatePickerInput } from 'components/shared/DatePickerInput';

const DatePickerInputField = props => <DatePickerInput {...props} />;

export default React.memo(DatePickerInputField);
