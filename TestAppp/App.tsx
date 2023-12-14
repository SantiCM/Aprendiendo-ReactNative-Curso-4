//import { CounterScreen } from './src/screens/CounterScreen';
//import { BoxObjectsModelPage } from './src/screens/BoxObjectsModelPage';
import { SafeAreaView } from 'react-native';
//import { DimensionsScreen } from './src/screens/DimensionsScreen';
//import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

export const App = () => {
  
  return (

    <SafeAreaView style={{ flex: 1 }}>

      <TareaScreen></TareaScreen>

    </SafeAreaView>

  )

}

{/*<HolaMundoScreen></HolaMundoScreen>*/}
{/*<CounterScreen></CounterScreen>*/}
{/*<BoxObjectsModelPage></BoxObjectsModelPage>*/}
{/*<DimensionsScreen></DimensionsScreen>*/}
{/*<PositionScreen></PositionScreen>*/}
{/*<FlexScreen></FlexScreen>*/}