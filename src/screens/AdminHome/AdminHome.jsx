import {View, Text} from 'react-native';
import React from 'react';
import Page from '../../components /Page';
const AdminHome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>AdminHome</Text>
      <Page name={'Approve'} onPress={() => navigation.navigate('Approve')} />
      <Page
        name={'UserInfoSpace'}
        onPress={() => navigation.navigate('UserInfoSpace')}
      />
    </View>
  );
};

export default AdminHome;
