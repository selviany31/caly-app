import { ScrollView, Text, View } from 'react-native';
import { formatCurrency } from '../../utils/utils';
import { useCalyContext } from '../../store/store';

const ResultPrice = () => {
  const { state } = useCalyContext();

  const getFee = () => {
    if (state?.data?.seller === 'non-star') {
      switch (state?.data?.sub) {
        case 'A':
          return 6;
        case 'B':
          return 5;
        case 'C':
          return 3.5;
        default:
          break;
      }
    }
    if (state?.data?.seller === 'star') {
      switch (state?.data?.sub) {
        case 'A':
          return 6.5;
        case 'B':
          return 5.5;
        case 'C':
          return 4;
        default:
          break;
      }
    }
  };

  const cashbackValue = state?.data?.cashback ? 1.4 : '';
  const shipmentValue = state?.data?.shipment ? 4 : '';

  const total = state?.data?.price - state?.data?.disc - state?.data?.voucher;
  const serviceFee = (getFee() * total) / 100;
  const cashback = () => {
    const cal = (cashbackValue * total) / 100;
    return cal < 10000 ? cal : 10000;
  };
  const shipment = () => {
    const cal = (shipmentValue * total) / 100;
    return cal < 10000 ? cal : 10000;
  };
  const profit = (state?.data?.profit * total) / 100;

  const sellingPrice =
    parseFloat(state?.data?.price) +
    parseFloat(state?.data?.disc) +
    parseFloat(state?.data?.voucher) +
    parseFloat(serviceFee) +
    parseFloat(cashback()) +
    parseFloat(shipment()) +
    parseFloat(state?.data?.cost) +
    parseFloat(profit);

  const handleAfterPrice = () => {
    const total = sellingPrice - state?.data?.disc - state?.data?.voucher;
    const serviceFee = (getFee() * total) / 100;
    const cashback = () => {
      const cal = (cashbackValue * total) / 100;
      return cal < 10000 ? cal : 10000;
    };
    const shipment = () => {
      const cal = (shipmentValue * total) / 100;
      return cal < 10000 ? cal : 10000;
    };

    return total - serviceFee - cashback() - shipment();
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
              {formatCurrency(state?.data?.price, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4 text-primary font-semibold'>
              Diskon Penjual
            </Text>
            <Text className='text-primary font-semibold '>
              {formatCurrency(state?.data?.disc, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4 text-primary font-semibold'>
              Voucher Penjual
            </Text>
            <Text className='text-primary font-semibold '>
              {formatCurrency(state?.data?.voucher, '')}
            </Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>
              Biaya Administrasi{' '}
              {`(${getFee()}% * ${formatCurrency(total, '')})`}
            </Text>
            <Text>{formatCurrency(serviceFee, '')}</Text>
          </View>
          {state?.data?.cashback && (
            <View className='flex-row justify-between my-1'>
              <Text className='w-3/4'>
                Biaya Layanan Cashback XTRA{' '}
                {`(${cashbackValue}% * ${formatCurrency(
                  total,
                  ''
                )}, maks. 10.000)`}
              </Text>
              <Text>{formatCurrency(cashback(), '')}</Text>
            </View>
          )}
          {state?.data?.shipment && (
            <View className='flex-row justify-between my-1'>
              <Text className='w-3/4'>
                Biaya Layanan Gratis Ongkir XTRA{' '}
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
              {`(${state?.data?.profit}% * ${formatCurrency(total, '')})`}
            </Text>
            <Text>{formatCurrency(profit, '')}</Text>
          </View>
          <View className='flex-row justify-between my-1'>
            <Text className='w-3/4'>Biaya Operasional</Text>
            <Text>{formatCurrency(state?.data?.cost, '')}</Text>
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
