import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import * as Stripe from '@stripe/stripe-react-native';

import style from './style';
import {useSelector} from 'react-redux';
import Button from '../../assets/components/button/Button';
import Header from '../../assets/components/Header/header';

const Payment = ({navigation}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making Donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation.price}
        </Text>
        <View>
          <Stripe.StripeProvider
            publishableKey={
              'pk_test_51QpimXF2p4wJFSNYr0F18kVYFEU174AtnQvgmHzSyYCv4RsjMmPXFZrbjPYWSL7hArV2dj5P9WL54ndBLRT2RdQI00gbuTdMTr'
            }>
            <Stripe.CardForm style={style.cardForm} />
          </Stripe.StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Confirm donation'} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
