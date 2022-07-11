import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import TelaInicio from './componentes/Telas/TelaInicio';
import TelaMenu from './componentes/Telas/TelaMenu';
import TelaRacas from './componentes/Telas/TelaRacas';
import TelaClasses from './componentes/Telas/TelaClasses';
import TelaOrigens from './componentes/Telas/TelaOrigens';
import TelaDeuses from './componentes/Telas/TelaDeuses';
import TelaEquipamentos from './componentes/Telas/TelaEquipamentos';


import TelaHumano from './componentes/TelasRacas/TelaHumano';
import TelaAnao from './componentes/TelasRacas/TelaAnao';
import TelaDahllan from './componentes/TelasRacas/TelaDahllan';
import TelaElfo from './componentes/TelasRacas/TelaElfo';
import TelaGoblin from './componentes/TelasRacas/TelaGoblin';
import TelaLefou from './componentes/TelasRacas/TelaLefou';
import TelaMinotauro from './componentes/TelasRacas/TelaMinotauro';
import TelaQareen from './componentes/TelasRacas/TelaQareen';
import TelaGolem from './componentes/TelasRacas/TelaGolem';
import TelaHynne from './componentes/TelasRacas/TelaHynne';
import TelaKliren from './componentes/TelasRacas/TelaKliren';
import TelaMedusa from './componentes/TelasRacas/TelaMedusa';
import TelaOsteon from './componentes/TelasRacas/TelaOsteon';
import TelaSereiaTritao from './componentes/TelasRacas/TelaSereiaTritao';
import TelaSilfide from './componentes/TelasRacas/TelaSilfide';
import TelaSuraggel from './componentes/TelasRacas/TelaSuraggel';
import TelaTrog from './componentes/TelasRacas/TelaTrog';

import TelaArcanista from './componentes/TelasClasses/TelaArcanista';
import TelaBarbaro from './componentes/TelasClasses/TelaBarbaro';
import TelaBardo from './componentes/TelasClasses/TelaBardo';
import TelaBucaneiro from './componentes/TelasClasses/TelaBucaneiro';
import TelaCacador from './componentes/TelasClasses/TelaCacador';
import TelaCavaleiro from './componentes/TelasClasses/TelaCavaleiro';
import TelaClerigo from './componentes/TelasClasses/TelaClerigo';
import TelaDruida from './componentes/TelasClasses/TelaDruida';
import TelaGuerreiro from './componentes/TelasClasses/TelaGuerreiro';
import TelaInventor from './componentes/TelasClasses/TelaInventor';
import TelaLadino from './componentes/TelasClasses/TelaLadino';
import TelaLutador from './componentes/TelasClasses/TelaLutador';
import TelaNobre from './componentes/TelasClasses/TelaNobre';
import TelaPaladino from './componentes/TelasClasses/TelaPaladino';

import TelaAcolito from './componentes/TelasOrigens/TelaAcolito';
import TelaAmigoDosAnimais from './componentes/TelasOrigens/TelaAmigoDosAnimais';
import TelaAmnesico from './componentes/TelasOrigens/TelaAmnesico';
import TelaAristocrata from './componentes/TelasOrigens/TelaAristocrata';
import TelaArtesao from './componentes/TelasOrigens/TelaArtesao';
import TelaArtista from './componentes/TelasOrigens/TelaArtista';
import TelaAssistenteDeLab from './componentes/TelasOrigens/TelaAssistenteDeLab';
import TelaBatedor from './componentes/TelasOrigens/TelaBatedor';
import TelaCapanga from './componentes/TelasOrigens/TelaCapanga';
import TelaCharlatao from './componentes/TelasOrigens/TelaCharlatao';
import TelaCircense from './componentes/TelasOrigens/TelaCircense';
import TelaCriminoso from './componentes/TelasOrigens/TelaCriminoso';
import TelaCurandeiro from './componentes/TelasOrigens/TelaCurandeiro';
import TelaEremita from './componentes/TelasOrigens/TelaEremita';
import TelaEscravo from './componentes/TelasOrigens/TelaEscravo';
import TelaEstudioso from './componentes/TelasOrigens/TelaEstudioso';
import TelaFazendeiro from './componentes/TelasOrigens/TelaFazendeiro';
import TelaForasteiro from './componentes/TelasOrigens/TelaForasteiro';
import TelaGladiador from './componentes/TelasOrigens/TelaGladiador';
import TelaGuarda from './componentes/TelasOrigens/TelaGuarda';
import TelaHerdeiro from './componentes/TelasOrigens/TelaHerdeiro';
import TelaHeroiCampones from './componentes/TelasOrigens/TelaHeroiCampones';
import TelaMarujo from './componentes/TelasOrigens/TelaMarujo';
import TelaMateiro from './componentes/TelasOrigens/TelaMateiro';
import TelaMembroDeGuilda from './componentes/TelasOrigens/TelaMembroDeGuilda';
import TelaMercador from './componentes/TelasOrigens/TelaMercador';
import TelaMinerador from './componentes/TelasOrigens/TelaMinerador';
import TelaNomade from './componentes/TelasOrigens/TelaNomade';
import TelaPivete from './componentes/TelasOrigens/TelaPivete';
import TelaRefugiado from './componentes/TelasOrigens/TelaRefugiado';
import TelaSeguidor from './componentes/TelasOrigens/TelaSeguidor';
import TelaSelvagem from './componentes/TelasOrigens/TelaSelvagem';
import TelaSoldado from './componentes/TelasOrigens/TelaSoldado';
import TelaTaverneiro from './componentes/TelasOrigens/TelaTaverneiro';
import TelaTrabalhador from './componentes/TelasOrigens/TelaTrabalhador';
import TelaSuaPropriaOrigem from './componentes/TelasOrigens/TelaSuaPropriaOrigem';

import TelaAharadak from './componentes/TelasDeuses/TelaAharadak';
import TelaAllihanna from './componentes/TelasDeuses/TelaAllihanna';
import TelaArsenal from './componentes/TelasDeuses/TelaArsenal';
import TelaAzgher from './componentes/TelasDeuses/TelaAzgher';
import TelaHyninn from './componentes/TelasDeuses/TelaHyninn';
import TelaKallyadranoch from './componentes/TelasDeuses/TelaKallyadranoch';
import TelaKhalmyr from './componentes/TelasDeuses/TelaKhalmyr';
import TelaLena from './componentes/TelasDeuses/TelaLena';
import TelaLinWu from './componentes/TelasDeuses/TelaLinWu';
import TelaMarah from './componentes/TelasDeuses/TelaMarah';
import TelaMegalokk from './componentes/TelasDeuses/TelaMegalokk';
import TelaNimb from './componentes/TelasDeuses/TelaNimb';
import TelaOceano from './componentes/TelasDeuses/TelaOceano';
import TelaSszzaas from './componentes/TelasDeuses/TelaSszzaas';
import TelaTannaToh from './componentes/TelasDeuses/TelaTannaToh';
import TelaTenebra from './componentes/TelasDeuses/TelaTenebra';
import TelaThwor from './componentes/TelasDeuses/TelaThwor';
import TelaThyatis from './componentes/TelasDeuses/TelaThyatis';
import TelaValkaria from './componentes/TelasDeuses/TelaValkaria';
import TelaWynna from './componentes/TelasDeuses/TelaWynna';

import TelaArmas from './componentes/TelasEquipamentos/TelaArmas';
import TelaArmaduraseEscudos from './componentes/TelasEquipamentos/TelaArmaduraseEscudos';

{/*VARIAVEL QUE INICIA A LIB DE ROTAS*/ }
const Stack = createStackNavigator();

{/*VARIAVEL QUE GUARDA AS FONTES COM A FUNÇÃO LOADASYNC*/ }
const getFonts = () => Font.loadAsync({
  'principal': require('./assets/fonts/CinzelDecorative-Bold.ttf'),
  'paragrafos': require('./assets/fonts/K2D-Regular.ttf')
});

export default function App() {
  {/*VARIAVEL PARA SETAR AS FONTES*/ }
  const [fontsLoaded, setFontsLoaded] = useState(false);
  {/*CONDICAO PARA INICIAR O PROGRAMA SE AS FONTES ESTIVEREM OK*/ }
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#7D3030',
            },
            headerTitleStyle: {
              fontSize: 26,
              fontFamily: 'principal',
              color: '#fff',
            },
            headerTintColor: '#fff',
          }}>
          {/*ROTAS DAS TELAS PRINCIPAIS*/}
          <Stack.Screen name='Início' component={TelaInicio} />
          <Stack.Screen name='Menu' component={TelaMenu} />
          <Stack.Screen name='Raças' component={TelaRacas} />
          <Stack.Screen name='Classes' component={TelaClasses} />
          <Stack.Screen name='Origens' component={TelaOrigens} />
          <Stack.Screen name='Deuses' component={TelaDeuses} />
          <Stack.Screen name='Equipamentos' component={TelaEquipamentos} />

          {/*ROTAS DAS TELAS DE RACAS*/}
          <Stack.Screen name='Humanos' component={TelaHumano} />
          <Stack.Screen name='Anões' component={TelaAnao} />
          <Stack.Screen name='Dahllans' component={TelaDahllan} />
          <Stack.Screen name='Elfos' component={TelaElfo} />
          <Stack.Screen name='Goblins' component={TelaGoblin} />
          <Stack.Screen name='Lefous' component={TelaLefou} />
          <Stack.Screen name='Minotauros' component={TelaMinotauro} />
          <Stack.Screen name='Qareens' component={TelaQareen} />
          <Stack.Screen name='Golens' component={TelaGolem} />
          <Stack.Screen name='Hynnes' component={TelaHynne} />
          <Stack.Screen name='Klirens' component={TelaKliren} />
          <Stack.Screen name='Medusas' component={TelaMedusa} />
          <Stack.Screen name='Osteons' component={TelaOsteon} />
          <Stack.Screen name='Sereias/Tritões' component={TelaSereiaTritao} />
          <Stack.Screen name='Silfides' component={TelaSilfide} />
          <Stack.Screen name='Suraggels' component={TelaSuraggel} />
          <Stack.Screen name='Trogs' component={TelaTrog} />

          {/*ROTAS DAS TELAS DE CLASSES*/}
          <Stack.Screen name='Arcanista' component={TelaArcanista} />
          <Stack.Screen name='Bárbaro' component={TelaBarbaro} />
          <Stack.Screen name='Bardo' component={TelaBardo} />
          <Stack.Screen name='Bucaneiro' component={TelaBucaneiro} />
          <Stack.Screen name='Caçador' component={TelaCacador} />
          <Stack.Screen name='Cavaleiro' component={TelaCavaleiro} />
          <Stack.Screen name='Clérigo' component={TelaClerigo} />
          <Stack.Screen name='Druida' component={TelaDruida} />
          <Stack.Screen name='Guerreiro' component={TelaGuerreiro} />
          <Stack.Screen name='Inventor' component={TelaInventor} />
          <Stack.Screen name='Ladino' component={TelaLadino} />
          <Stack.Screen name='Lutador' component={TelaLutador} />
          <Stack.Screen name='Nobre' component={TelaNobre} />
          <Stack.Screen name='Paladino' component={TelaPaladino} />

          {/*ROTAS DAS TELAS DE ORIGENS*/}
          <Stack.Screen name='Acólito' component={TelaAcolito} />
          <Stack.Screen name='Amigo dos Animais' component={TelaAmigoDosAnimais} />
          <Stack.Screen name='Amnésico' component={TelaAmnesico} />
          <Stack.Screen name='Aristocrata' component={TelaAristocrata} />
          <Stack.Screen name='Artesão' component={TelaArtesao} />
          <Stack.Screen name='Artista' component={TelaArtista} />
          <Stack.Screen name='Assis. De Lab.' component={TelaAssistenteDeLab} />
          <Stack.Screen name='Batedor' component={TelaBatedor} />
          <Stack.Screen name='Capanga' component={TelaCapanga} />
          <Stack.Screen name='Charlatão' component={TelaCharlatao} />
          <Stack.Screen name='Circense' component={TelaCircense} />
          <Stack.Screen name='Criminoso' component={TelaCriminoso} />
          <Stack.Screen name='Curandeiro' component={TelaCurandeiro} />
          <Stack.Screen name='Eremita' component={TelaEremita} />
          <Stack.Screen name='Escravo' component={TelaEscravo} />
          <Stack.Screen name='Estudioso' component={TelaEstudioso} />
          <Stack.Screen name='Fazendeiro' component={TelaFazendeiro} />
          <Stack.Screen name='Forasteiro' component={TelaForasteiro} />
          <Stack.Screen name='Gladiador' component={TelaGladiador} />
          <Stack.Screen name='Guarda' component={TelaGuarda} />
          <Stack.Screen name='Herdeiro' component={TelaHerdeiro} />
          <Stack.Screen name='Herói Camponês' component={TelaHeroiCampones} />
          <Stack.Screen name='Marujo' component={TelaMarujo} />
          <Stack.Screen name='Mateiro' component={TelaMateiro} />
          <Stack.Screen name='Membro de Guilda' component={TelaMembroDeGuilda} />
          <Stack.Screen name='Mercador' component={TelaMercador} />
          <Stack.Screen name='Minerador' component={TelaMinerador} />
          <Stack.Screen name='Nômade' component={TelaNomade} />
          <Stack.Screen name='Pivete' component={TelaPivete} />
          <Stack.Screen name='Refugiado' component={TelaRefugiado} />
          <Stack.Screen name='Seguidor' component={TelaSeguidor} />
          <Stack.Screen name='Selvagem' component={TelaSelvagem} />
          <Stack.Screen name='Soldado' component={TelaSoldado} />
          <Stack.Screen name='Taverneiro' component={TelaTaverneiro} />
          <Stack.Screen name='Trabalhador' component={TelaTrabalhador} />
          <Stack.Screen name='Sua Própria Origem' component={TelaSuaPropriaOrigem} />

          {/*ROTAS DAS TELAS DE DEUSES*/}
          <Stack.Screen name='Aharadak' component={TelaAharadak} />
          <Stack.Screen name='Allihanna' component={TelaAllihanna} />
          <Stack.Screen name='Arsenal' component={TelaArsenal} />
          <Stack.Screen name='Azgher' component={TelaAzgher} />
          <Stack.Screen name='Hyninn' component={TelaHyninn} />
          <Stack.Screen name='Kallyadranoch' component={TelaKallyadranoch} />
          <Stack.Screen name='Khalmyr' component={TelaKhalmyr} />
          <Stack.Screen name='Lena' component={TelaLena} />
          <Stack.Screen name='Lin-Wu' component={TelaLinWu} />
          <Stack.Screen name='Marah' component={TelaMarah} />
          <Stack.Screen name='Megalokk' component={TelaMegalokk} />
          <Stack.Screen name='Nimb' component={TelaNimb} />
          <Stack.Screen name='Oceano' component={TelaOceano} />
          <Stack.Screen name='Sszzaas' component={TelaSszzaas} />
          <Stack.Screen name='Tanna-Toh' component={TelaTannaToh} />
          <Stack.Screen name='Tenebra' component={TelaTenebra} />
          <Stack.Screen name='Thwor' component={TelaThwor} />
          <Stack.Screen name='Thyatis' component={TelaThyatis} />
          <Stack.Screen name='Valkaria' component={TelaValkaria} />
          <Stack.Screen name='Wynna' component={TelaWynna} />

          {/*ROTAS DAS TELAS DE EQUIPAMENTOS*/}
          <Stack.Screen name='Armas' component={TelaArmas} />
          <Stack.Screen name='Armaduras e Escudos' component={TelaArmaduraseEscudos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    {/*RETORNA O ERRO SE OCORRER*/ }
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={() => console.log('error')} />
    )
  }
}