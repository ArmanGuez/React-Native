import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native'; 

const style ={
  fontSize: 40,
};

const NuevoComponente = ({title}) => {
  return <Text style={style}>{title}</Text>;
};

export const App = () => {
  const [contadorS, setContadorS] = useState(0);
  const [contadorM, setContadorM] = useState(0);

  useEffect(() => {
    if (contadorS > 59) setContadorS (0);
    setContadorM(contadorM + 1);

  }, [contadorS]);

  const handClick = () => {
    setContadorS(contadorS + 1);
  }

  return (
    <View>
      <NuevoComponente title="Contador: " />
      <NuevoComponente title={contadorS} />
      <Text>
      {contadorS < 10 ? "0" + contadorS : contadorS}
      {contadorM < 10 ? "0" + contadorM : contadorM}
      </Text>
      <Button title="Prueba" onPress={handClick} />
    </View>
  );
};
export default App;