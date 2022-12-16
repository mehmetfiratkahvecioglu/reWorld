import React, {useEffect} from 'react';
import {View, TextInput, TouchableOpacity, Text, Button} from 'react-native';

import SwitchSelector from 'react-native-switch-selector';

import styles from './SignIn.style';
import useBearStore from '../../stores/useStore';

const SignIn = ({navigation}) => {
  const [name, setName] = React.useState();
  const [password, setPassword] = React.useState();

  const [isAdmin, setIsAdmin] = React.useState('Normal');

  const role = useBearStore(state => state.role);

  const changeRole = useBearStore(state => state.changeRole);

  useEffect(() => {
    changeRole(isAdmin);
  }, [isAdmin]);

  const handleSignIn = () => {
    role == 'Normal'
      ? navigation.navigate('Home')
      : navigation.navigate('AdminHome');
  };

  console.log('yenilendi');
  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <SwitchSelector
          initial={0}
          onPress={value => setIsAdmin(value)}
          textColor={'green'} //'#7a44cf'
          selectedColor={'white'}
          buttonColor={'green'}
          borderColor={'green'}
          hasPadding
          options={[
            {label: 'Normal', value: 'Normal'},
            {label: 'Admin', value: 'Admin'},
          ]}
          testID="gender-switch-selector"
          accessibilityLabel="gender-switch-selector"
        />
      </View>

      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
