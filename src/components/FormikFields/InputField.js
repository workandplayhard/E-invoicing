import React from 'react';

import { Input } from 'components/shared/Input';

const InputField = props => <Input {...props} />;

export default React.memo(InputField);
