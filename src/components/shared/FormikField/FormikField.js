import React from 'react';
import { useField } from 'formik';

import { FormControl } from 'components/shared/FormControl';

const FormikField = ({
  required,
  label,
  name,
  controlProps,
  component: Component,
  componentProps,
}) => {
  const [field, meta, helpers] = useField({ name });

  const haveError = meta.touched && !!meta.error;

  return (
    <FormControl
      {...controlProps}
      haveError={haveError}
      required={required}
      error={meta.error}
      label={label}>
      <Component
        {...componentProps}
        value={field.value}
        onChange={helpers.setValue}
        onBlur={() => helpers.setTouched(!meta.touched)}
      />
    </FormControl>
  );
};

export default React.memo(FormikField);
