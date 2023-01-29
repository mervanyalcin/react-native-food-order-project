import {View, Text, Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '../App';

export type NavigationProp = NativeStackNavigationProp<
RootParamList,
'DetailScreen'
>;

interface OrderScreenProps {}
const DetailScreen: React.FC<OrderScreenProps> = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView>
      <Text>Daha neler dahaadhsbajk dasjkd asldk</Text>
      <Button
        title="Go Home Yankee"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};

export default DetailScreen;
