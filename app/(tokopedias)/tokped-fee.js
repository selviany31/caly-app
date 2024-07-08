import { ScrollView, Text, View } from 'react-native';
import { useCalyContext } from '../../store/store';
import { formatCurrency } from '../../utils/utils';

const ResultFee = () => {
  const { state } = useCalyContext();

  const total = state?.tokped?.price - state.tokped?.disc;
  const fee = (total * state?.tokped?.sub) / 100;

  const handleOngkir = () => {
    const cal = (total * state?.tokped?.shipment) / 100;
    if (cal > 10000) {
      return 10000;
    } else {
      return cal;
    }
  };

  const totalResult = total - fee - state?.tokped?.extra - handleOngkir();

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
              {formatCurrency(state?.tokped?.price, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>Kupon Toko (Ditanggung Penjual)</Text>
            <Text>{formatCurrency(state?.tokped?.disc, '')}</Text>
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
          {state?.tokped?.extra !== 0 && (
            <View className='flex-row justify-between my-1'>
              <Text className='w-3/4'>
                Biaya Fullfillment Gratis Ongkir Extra
              </Text>
              <Text>{formatCurrency(state?.tokped?.extra, '')}</Text>
            </View>
          )}
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>
              Biaya Layanan{' '}
              {`(${state?.tokped?.sub}% * ${formatCurrency(total, '')})`}
            </Text>
            <Text>{formatCurrency(fee, '')}</Text>
          </View>
          {state?.tokped?.shipment !== null && (
            <View className='flex-row justify-between my-1'>
              <Text className='w-3/4'>{`Biaya Layanan Bebas Ongkir ${
                state?.tokped?.extra === 0 ? '' : 'Extra'
              } (${state?.tokped?.shipment}% maks. 10.000)`}</Text>
              <Text>{formatCurrency(handleOngkir(), '')}</Text>
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
