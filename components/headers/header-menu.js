import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, Text, View } from 'react-native';
import images from '../../constants/images';
import { Ionicons } from '@expo/vector-icons';

const HeaderMenu = () => {
  return (
    <View className='bg-primary h-[25vh] absolute w-full rounded-b-3xl'>
      <View className='w-full mt-5'>
        <View className='w-full'>
          <View className='flex-row justify-between items-center mx-5'>
            <View className='flex-row items-center'>
              <Pressable onPress={() => router.push('/')}>
                <Image
                  source={images.caly}
                  className='w-[50px] h-[50px]'
                  resizeMode='contain'
                />
              </Pressable>
              <Text className='text-[#fff] font-bold text-2xl ml-2'>CALY</Text>
            </View>
            <Pressable onPress={() => router.push('/profile')}>
              <Ionicons name='settings' size={20} color='#fff' />
            </Pressable>
          </View>
          <View className='mx-10 mt-5'>
            <Text className='text-[#fff]'>Selamat Datang,</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderMenu;
