import { ScrollView, Text, View } from 'react-native';
import { useCalyContext } from '../../store/store';
import { formatCurrency } from '../../utils/utils';

const ResultPrice = () => {
  const { state } = useCalyContext();

  const total = state?.tokped?.price - state.tokped?.disc;
  const fee = (total * state?.tokped?.sub) / 100;
  const profit = (total * state?.tokped?.profit) / 100;

  const handleOngkir = (price) => {
    const cal = ((price - state?.tokped?.disc) * state?.tokped?.shipment) / 100;
    if (cal > 10000) {
      return 10000;
    } else {
      return cal;
    }
  };

  const sellingPrice =
    parseFloat(state?.tokped?.price) +
    parseFloat(state?.tokped?.disc) +
    parseFloat(fee) +
    parseFloat(state?.tokped?.extra) +
    parseFloat(handleOngkir(state?.tokped.price)) +
    parseFloat(state?.tokped?.cost) +
    parseFloat(profit);

  const handleAfterPrice = () => {
    const total = sellingPrice - state?.tokped?.disc;
    const fee = (state?.tokped?.sub * total) / 100;
    return total - fee - state?.tokped?.extra - handleOngkir(sellingPrice);
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
              {formatCurrency(state?.tokped?.price, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>Kupon Toko (Ditanggung Penjual)</Text>
            <Text>{formatCurrency(state?.tokped?.disc, '')}</Text>
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
              <Text>
                {formatCurrency(handleOngkir(state?.tokped?.price), '')}
              </Text>
            </View>
          )}
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>
              Keuntungan{' '}
              {`(${state?.tokped?.profit}% * ${formatCurrency(total, '')})`}
            </Text>
            <Text>{formatCurrency(profit, '')}</Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>Biaya Operasional</Text>
            <Text>{formatCurrency(state?.tokped?.cost, '')}</Text>
          </View>

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
