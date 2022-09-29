import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { Input } from 'components/shared/Input';

import EyeIcon from 'assets/icons/eye.svg';
import CrossEyeIcon from 'assets/icons/cross-eye.svg';

import styles from './PasswordField.styles';

const PasswordField = props => {
  const [visible, setVisible] = useState(false);

  const handleIconPress = () => {
    setVisible(!visible);
  };

  return (
    <Input
      {...props}
      startAdornment={
        !visible ? (
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={handleIconPress}>
            <EyeIcon style={styles.icon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={handleIconPress}>
            <CrossEyeIcon style={styles.icon} />
          </TouchableOpacity>
        )
      }
      secureTextEntry={visible ? false : true}
    />
  );
};

export default React.memo(PasswordField);
