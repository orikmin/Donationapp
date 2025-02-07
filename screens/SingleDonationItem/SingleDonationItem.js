import {useSelector} from 'react-redux';
import BackButton from '../../assets/components/backButton/BackButton';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import style from './style';
import Badge from '../../assets/components/Badge/Badge';
import Header from '../../assets/components/Header/header';
import Button from '../../assets/components/button/Button';
import {Routes} from '../../navigation/Routes';

const SingleDonationItem = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => navigation.navigate(Routes.Payment)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
