import { ScrollView, Text, View } from 'react-native';
import { useCalyContext } from '../../store/store';
import { formatCurrency } from '../../utils/utils';

const ResultFee = () => {
  const { state } = useCalyContext();

  const total = state?.tiktok?.price - state.tiktok?.disc;
  const serviceFee = (state?.tiktok?.sub * total) / 100;
  const shipmentValue = state?.tiktok?.shipment ? 3 : '';
  const shipment = () => {
    const cal = (shipmentValue * total) / 100;
    return cal > 10000 ? 10000 : cal;
  };

  const totalResult = total - serviceFee - shipment();

  return (
    <ScrollView className='bg-calm h-full'>
      <View className='px-5 py-6'>
        <Text className='font-bold text-primary text-xl mb-5'>
          Hasil Perhitungan Biaya Layanan
        </Text>
        <View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4 text-primary font-semibold'>
              Harga Awal Produk
            </Text>
            <Text className='text-primary font-semibold '>
              {formatCurrency(state?.tiktok?.price, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>Diskon Toko (Ditanggung Penjual)</Text>
            <Text>{formatCurrency(state?.tiktok?.disc, '')}</Text>
          </View>

          <View className='border-b border-primary my-1'></View>

          <View className='flex-row justify-between mt-1 mb-3'>
            <Text className='w-3/4 text-primary font-semibold'>
              Total yang Dibayar Pembeli
            </Text>
            <Text className='text-primary font-semibold'>
              {formatCurrency(total, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>
              Biaya Layanan{' '}
              {`(${state?.tiktok?.sub}% * ${formatCurrency(total, '')})`}
            </Text>
            <Text>{formatCurrency(serviceFee, '')}</Text>
          </View>
          {state?.tiktok?.shipment && (
            <View className='flex-row justify-between my-1'>
              <Text className='w-3/4'>
                Biaya Layanan Gratis Ongkir EXTRA{' '}
                {`(${shipmentValue}% * ${formatCurrency(
                  total,
                  ''
                )}, maks 10.000)`}
              </Text>
              <Text>{formatCurrency(shipment(), '')}</Text>
            </View>
          )}
          <View className='border-b border-primary my-1'></View>

          <View className='flex-row justify-between my-1 bg-primary py-2 px-1 rounded-sm'>
            <Text className='text-calm font-bold text-md'>
              Harga Yang Diterima Penjual
            </Text>
            <Text className='text-calm font-bold text-md'>
              {formatCurrency(totalResult, '')}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultFee;
