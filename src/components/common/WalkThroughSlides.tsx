import { Button } from '@rneui/base';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SlideTypes} from 'types';
import { useTheme,useThemeMode ,makeStyles} from '@rneui/themed';

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    image: require('../../assets/images/2.png'),
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    backgroundColor: '#22bcb5',
  },
];

const WalkThroughSlides: React.FC = () => {
  const [showRealApp, setShowRealApp] = useState<boolean>(false);
    const { mode, setMode } = useThemeMode();
    const { theme, updateTheme } = useTheme();
  const _renderItem = ({item}: {item: SlideTypes}) => {
    return (
      <View style={styles.slide}>
        <ImageBackground
          imageStyle={{borderRadius: 50}}
          style={styles.image}
          source={item.image}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  };

  const _onDone = () => {
    setShowRealApp(true);
  };

  return (
    <><AppIntroSlider renderItem={_renderItem} data={slides} onDone={_onDone} />
    <Text style={{color:theme.colors.primary}}>
        richmond-{mode}
        </Text>
          <Button title={'SetTheme'} onPress={() => updateTheme({ darkColors: { primary: 'red' } })} />
          <Button title={mode} onPress={() => setMode('dark'||'light')} />
        </>
  );
};

const useStyles = makeStyles((theme) => ({
    container: {
        background: theme.colors.white,
        width: '100%'  
    },
    text: {
        color: theme.colors.primary,
    },
    button: {
        color: theme.colors.primary,
        height: 50
    },
}));




const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 500,
    borderBottomStartRadius: 60,
    marginBottom: 16,
  },
});

export default WalkThroughSlides;
