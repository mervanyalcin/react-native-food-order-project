import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View, 
  StatusBar,
  useColorScheme,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ActionMainMenu from '../components/ActionMainMenu';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const win = Dimensions.get('window');
  const ratio = win.width / 1329;
  const isDarkMode = useColorScheme() === 'dark';
  return ( 
    <SafeAreaView className="pb-80">
      <StatusBar
        animated={true}
        backgroundColor={`${isDarkMode ? 'red' : 'green'}`}
      />
      <TouchableOpacity className="mt-2 pl-1 relative">
        <Image
          className="w-[400] h-[140] self-center"
          source={require('../img/logo.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text className="text-center mt-2 ">Habil Pizza Hızlı Sipariş Hattı</Text>
      <Text className="text-center">
        Siparişinizi buradan doğrudan şefe iletebilirsiniz!
      </Text>

      <ScrollView className="px-2 mt-4">
        <ActionMainMenu
          img={
            'https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg'
          }
          title={'Kahvaltı'}
          screen={'Detail'}
          category={'breakfast'}
          menuId={'1'}
        />
        <ActionMainMenu
          img={'https://i.ytimg.com/vi/9FJ0sV8_O_8/maxresdefault.jpg'}
          title={'Pizzalar'}
          screen={'Detail'}
          category={'pizza'}
          menuId={'2'}
        />
        <ActionMainMenu
          img={
            'https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C106%2C2000%2C1106&poi=%5B940%2C680%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F06%2F09%2Frecipe-red-drink.jpg'
          }
          title={'İçecekler'}
          screen={'Detail'}
          category={'drinks'}
          menuId={'3'}
        />
        <ActionMainMenu
          img={
            'data:image/jpeg;base64,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'
          }
          title={'Tatlılar'}
          screen={'Detail'}
          category={'desert'}
          menuId={'4'}
        />
        <ActionMainMenu
          img={
            'https://img-s2.onedio.com/id-53e8bf4b9aa0eca0513de7a7/rev-0/w-620/f-jpg/s-a74a9b4da6d4bc75fae403d36411726709580b01.jpg'
          }
          title={'İtalyan Mutfağı'}
          screen={'Detail'}
          category={'italianKitchen'}
          menuId={'5'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
