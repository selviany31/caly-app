import { Image, ScrollView, Text, View } from 'react-native';
import images from '../constants/images';
import Button from '../components/button/button';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const Home = () => {
  return (
    <>
      <SafeAreaView className='bg-light'>
        <ScrollView className='h-full'>
          <View className='bg-primary h-screen justify-center items-center'>
            <View className='bg-light w-full h-[25%] absolute top-0 rounded-b-full'></View>
            <Image
              source={images.caly}
              className='w-[100px] h-[100px]'
              resizeMode='contain'
            />
            <Text className='text-3xl font-bold text-calm'>CALY</Text>
            <Text className='text-calm uppercase font-semibold'>
              Calculate with ease,
            </Text>
            <Text className='text-calm uppercase font-semibold'>
              Sell with confidence
            </Text>

            <View className='w-full px-4 absolute bottom-10'>
              <Button
                title='Mulai'
                handlePress={() => router.push('/menu')}
                containerStyles='w-full mt-7 bg-light'
                textStyle='text-xl'
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style='light' />
    </>
  );
};

export default Home;
