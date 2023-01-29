import {View, Text, Image, TouchableHighlight, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProp} from 'react-navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootParamList} from '../App';

interface IActionMainMenuProps {
  img: string;
  title: string;
  category: string;
  menuId: string;
  screen: string
}

export type NavigationProp = NativeStackNavigationProp<
  RootParamList,
  'Home'
>;

const ActionMainMenu: React.FC<IActionMainMenuProps> = ({
  img,
  title,
  category,
  menuId,
  screen
}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate("DetailScreen")
      }>
      <View className="mt-2 bg-green-500 rounded-lg relative flex justify-center items-center">
        <Text className="text-white absolute z-20 font-sans">{title}</Text>
        <View className="absolute left-0 top-0 w-full h-full bg-black z-10 opacity-40"></View>
        <Image
          source={{
            uri: img,
          }}
          className={'w-full h-[100] border'}
        />
      </View>
    </TouchableHighlight>
  );
};

export default ActionMainMenu;
