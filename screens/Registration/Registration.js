import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../assets/components/Input/Input';
import Header from '../../assets/components/Header/header';
import Button from '../../assets/components/button/Button';
import BackButton from '../../assets/components/backButton/BackButton';
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView
      style={[
        globalStyles.backgroundWhite,
        globalStyles.flex,
        {justifyContent: 'center'},
      ]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.marginBottom24}>
          <Header type={1} title={'Hello and Welcome!'} />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            label={'First and last name'}
            placeholder={'Enter your name...'}
            onChangeText={value => setName(value)}
          />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            keyboardType={'email-address'}
            label={'Email'}
            placeholder={'Enter your email...'}
            onChangeText={value => setEmail(value)}
          />
        </View>
        <View style={globalStyles.marginBottom24}>
          <Input
            secureTextEntry={true}
            label={'Password'}
            placeholder={'******'}
            onChangeText={value => setPassword(value)}
          />
        </View>
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        <View style={globalStyles.marginBottom24}>
          <Button
            isDisabled={
              name.length <= 2 || email.length <= 5 || password.length < 8
            }
            title={'Registration'}
            onPress={async () => {
              let user = await createUser(name, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('You have successfully registered');
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
        <Pressable style={style.registrationButton} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
