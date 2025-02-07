import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

import style from './style';
import globalStyles from '../../assets/styles/globalStyles';
import Input from '../../assets/components/Input/Input';
import Header from '../../assets/components/Header/header';
import Button from '../../assets/components/button/Button';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {useDispatch} from 'react-redux';
import {logIn} from '../../redux/reducers/User';
import {CommonActions} from '@react-navigation/native';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex, ,]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyles.marginBottom24}>
          <Header type={1} title={'Welcome Back'} />
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
        <View style={globalStyles.marginBottom24}>
          <Button
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                setTimeout(() => {
                  navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: Routes.Home}],
                    }),
                  );
                }, 500);
              }
            }}
            title={'Login'}
            isDisabled={email.length < 5 || password.length < 8}
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header color={'#156CF7'} type={3} title={"Don't have an account?"} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
