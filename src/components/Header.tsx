import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import assetList from '../assets/assetList';

const { height } = Dimensions.get('window');

function Header() {
  return (
    <ImageBackground style={styles.container} source={assetList.pattern}>
      <Image style={styles.logo} source={assetList.logo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.25,
    paddingHorizontal: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: height * 0.2,
  },
});

export default Header;
