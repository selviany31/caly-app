import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Link, router, usePathname } from 'expo-router';
import images from '../../constants/images';

const HeaderCard = ({ title }) => {
  const handleImg = () => {
    switch (title) {
      case 'tokopedia':
        return images.tokopedia;
      case 'shopee':
        return images.shopee;
      case 'tiktok':
        return images.tiktok;
      case 'lazada':
        return images.lazada;
      case 'blibli':
        return images.blibli;
      default:
        return null;
    }
  };

  return (
    <View className='w-full bg-primary h-[80px] px-5 shadow flex-row items-center'>
      <View className='w-full'>
        <TouchableOpacity
          onPress={() => router.dismiss(1)}
          className='relative z-10'
        >
          <AntDesign name='left' size={24} color='#fff' />
        </TouchableOpacity>
        <View className='absolute w-full z-0'>
          <View className='flex-row justify-center items-center'>
            {handleImg() && (
              <Image
                source={handleImg()}
                className='w-[30px] h-[30px] mr-3'
                resizeMode='contain'
                tintColor='#fff'
              />
            )}
            <Text className='text-[#fff] font-bold text-xl capitalize'>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderCard;
