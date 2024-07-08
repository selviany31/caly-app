import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMenu from '../../components/headers/header-menu';
import images from '../../constants/images';

const MenuList = () => {
  return (
    <SafeAreaView className='h-screen'>
      <HeaderMenu />
      <View className='mt-[130px] w-full min-h-[75vh]'>
        <View className='mx-8'>
          <View className='bg-calm w-full min-h-[75vh] rounded-lg'>
            <View className='p-10 w-full'>
              <FlatList
                data={[
                  {
                    title: 'tokopedia',
                    image: images.tokopedia,
                  },
                  {
                    title: 'shopee',
                    image: images.shopee,
                  },
                  {
                    title: 'tiktok',
                    image: images.tiktok,
                  },
                  {
                    title: 'lazada',
                    image: images.lazada,
                  },
                  {
                    title: 'blibli',
                    image: images.blibli,
                  },
                ]}
                renderItem={({ item }) => (
                  <Pressable
                    className='bg-[#fff] mb-5 w-[45%] rounded-xl shadow-xl flex justify-center items-center'
                    onPress={() => router.push(`/${item.title}`)}
                    disabled={
                      item?.title === 'lazada' || item?.title === 'blibli'
                    }
                  >
                    {(item?.title === 'lazada' || item?.title === 'blibli') && (
                      <View
                        className='w-full h-full absolute flex-row justify-center items-center z-10 rounded-xl'
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        }}
                      >
                        <Text className='font-bold text-[#fff]'>
                          COMING SOON
                        </Text>
                      </View>
                    )}
                    <View className='py-3 flex-col justify-center items-center'>
                      <Image
                        source={item?.image}
                        className='w-[50px] h-[50px]'
                        resizeMode='contain'
                      />
                      <Text className='mt-3 uppercase text-primary font-bold'>
                        {item?.title}
                      </Text>
                    </View>
                  </Pressable>
                )}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: 'space-between',
                }}
              />
            </View>
          </View>
        </View>
      </View>
      <StatusBar translucent={false} backgroundColor='#3d52a0' style='light' />
    </SafeAreaView>
  );
};

export default MenuList;
