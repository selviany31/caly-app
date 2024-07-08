import { ScrollView, Text, View } from 'react-native';
import { useCalyContext } from '../../store/store';
import { formatCurrency } from '../../utils/utils';

const ResultPrice = () => {
  const { state } = useCalyContext();
  const total = state?.tiktok?.price - state.tiktok?.disc;
  const serviceFee = (state?.tiktok?.sub * total) / 100;
  const shipmentValue = state.tiktok?.shipment ? 3 : '';
  const shipment = () => {
    const cal = (shipmentValue * total) / 100;
    return cal > 10000 ? 10000 : cal;
  };
  const profit = (state?.tiktok?.profit * total) / 100;
  const sellingPrice =
    parseFloat(state?.tiktok?.price) +
    parseFloat(state?.tiktok?.disc) +
    parseFloat(serviceFee) +
    parseFloat(shipment()) +
    parseFloat(state?.tiktok?.cost) +
    parseFloat(profit);

  const handleAfterPrice = () => {
    const total = sellingPrice - state?.tiktok?.disc;
    const serviceFee = (state?.tiktok?.sub * total) / 100;
    const shipment = () => {
      const cal = (shipmentValue * total) / 100;
      return cal < 10000 ? cal : 10000;
    };
    return total - serviceFee - shipment();
  };

  return (
    <ScrollView className='bg-calm h-full'>
      <View className='px-5 py-6'>
        <Text className='font-bold text-primary text-xl mb-5'>
          Hasil Perhitungan Harga Jual
        </Text>
        <View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4 text-primary font-semibold'>
              Harga Modal
            </Text>
            <Text className='text-primary font-semibold '>
              {formatCurrency(state?.tiktok?.price, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>Diskon Toko (Ditanggung Penjual)</Text>
            <Text>{formatCurrency(state?.tiktok?.disc, '')}</Text>
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
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>
              Keuntungan{' '}
              {`(${state?.tiktok?.profit}% * ${formatCurrency(total, '')})`}
            </Text>
            <Text>{formatCurrency(profit, '')}</Text>
          </View>
          {state?.tiktok?.cost && (
            <View className='flex-row justify-between my-1'>
              <Text className='w-3/4'>Biaya Operasional</Text>
              <Text>{formatCurrency(state?.tiktok?.cost, '')}</Text>
            </View>
          )}
          <View className='border-b border-primary my-1'></View>

          <View className='flex-row justify-between my-1 bg-primary py-2 px-1 rounded-sm'>
            <Text className='text-calm font-bold text-md'>
              Harga Jual Barang
            </Text>
            <Text className='text-calm font-bold text-md'>
              {formatCurrency(sellingPrice, '')}
            </Text>
          </View>
        </View>

        <View className='mt-16 w-full bg-light py-10 px-5 rounded-3xl'>
          <Text className='font-bold text-center text-calm text-lg'>
            Total Keuntungan yang diperoleh
          </Text>
          <Text className='text-3xl mt-3 font-bold text-center text-calm'>
            {formatCurrency(sellingPrice - handleAfterPrice())}
          </Text>
          <Text className='text-calm text-center text-[10px]'>
            (Sudah dipotong biaya admin)
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultPrice;
