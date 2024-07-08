import { ScrollView, Text, View } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <ScrollView>
      <View className='p-6 flex-col space-y-5'>
        <Text className='text-2xl text-primary font-bold'>CALY APP</Text>
        <View className='flex-col space-y-3'>
          <Text className='font-semibold text-primary'>Deskripsi Singkat:</Text>
          <Text>
            CALY APP adalah aplikasi yang dirancang untuk membantu penjual di
            platform marketplace menghitung biaya administrasi serta menetapkan
            harga jual produk secara efisien dan menguntungkan.
          </Text>
        </View>

        <View className='flex-col space-y-3'>
          <Text className='font-semibold text-primary'>Fitur Utama:</Text>
          <View>
            <Text>1. Perhitungan Biaya Admin Marketplace</Text>
            <View className='ml-3'>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  Aplikasi ini menyediakan perhitungan otomatis biaya
                  administrasi berdasarkan jenis produk, kategori, dan kebijakan
                  tarif dari marketplace yang bersangkutan.
                </Text>
              </View>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  Mendukung berbagai marketplace populer seperti Tokopedia,
                  Shopee, Tiktok Shop, dan lainnya.
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text>2. Penyesuaian Biaya Tambahan: </Text>
            <View className='ml-3'>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  Memungkinkan penjual untuk menambahkan biaya tambahan seperti
                  biaya pengemasan khusus, biaya pengiriman khusus, atau biaya
                  lain yang relevan.
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text>3. Penghitungan Harga Jual yang Optimal:</Text>
            <View className='ml-3'>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  Setelah biaya admin dihitung, aplikasi memberikan saran harga
                  jual yang optimal berdasarkan margin keuntungan yang
                  diinginkan atau kompetisi di pasar.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className='flex-col space-y-3'>
          <Text className='font-semibold text-primary'>Keunggulan:</Text>
          <View className='flex-col space-y-2'>
            <View className='ml-3'>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  <Text className='font-semibold'>Efisiensi Operasional: </Text>
                  Menghemat waktu penjual dengan menyediakan perhitungan
                  otomatis biaya admin dan harga jual.
                </Text>
              </View>
            </View>
            <View className='ml-3'>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  <Text className='font-semibold'>
                    Peningkatan Profitabilitas:{' '}
                  </Text>
                  Memungkinkan penjual untuk mengoptimalkan harga jual mereka
                  untuk meningkatkan margin keuntungan.
                </Text>
              </View>
            </View>
            <View className='ml-3'>
              <View className='flex-row'>
                <Text className='mr-3'>{'\u2022'}</Text>
                <Text>
                  <Text className='font-semibold'>
                    Fleksibilitas Penggunaan:{' '}
                  </Text>
                  Dapat digunakan oleh penjual perorangan maupun bisnis kecil
                  hingga menengah yang beroperasi di berbagai platform
                  marketplace.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View>
          <Text>
            Dengan <Text className='font-semibold text-primary'>CALY APP</Text>,
            penjual dapat fokus pada pertumbuhan bisnis mereka sambil memastikan
            bahwa mereka membuat keputusan harga yang cerdas dan mengelola biaya
            dengan tepat.
          </Text>
        </View>

        <View className='flex-col space-y-2'>
          <Text className='font-bold text-2xl text-primary'>HUBUNGI KAMI</Text>
          <View className='flex-row items-center space-x-3'>
            <FontAwesome name='whatsapp' size={20} color='#3d52a0' />
            <Text>+62 887 4454 1159</Text>
          </View>
          <View className='flex-row items-center space-x-3'>
            <MaterialCommunityIcons
              name='email-outline'
              size={20}
              color='#3d52a0'
            />
            <Text>calyappofficial@gmail.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
