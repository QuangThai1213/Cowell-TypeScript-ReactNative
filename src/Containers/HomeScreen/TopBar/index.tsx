import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export interface Props {}

interface State {}

export default class MainScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri:
                'https://s3-alpha-sig.figma.com/img/da34/2c30/41156885f0bac305f3102673ed6a282c?Expires=1618790400&Signature=hCIsbrjZsZdSF~O3g5BQyqhpTAkdh~wv2jMY8R3wAUqyuMZL-VwpOphTnt6byPoam68SyPsRbMuXhKiu8eca~Sz4JJrIqqz8gR5gWI6IBrOYfXRcs-TQTWk-5NN8KdspuT-PFipoP2nDMNP~SEGLrtBwNVldtxolPV-O20YaC~IWQOZjULXLKt-j4z4evXoqJiu2MTieMUrc6LfviWnjs8CgiM~1JWmkrVuCsIhsIzUSUc0LhKUSE~fZteqsKSA8AfSN6KQraYWHQ70BG-egVWvchDGiMHVq67J3MCZitJMt0zdRGkDq0U47rWiYfNVmhtiuvg1-UXo03vslF5fSdw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            }}
            style={styles.image}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginHorizontal: 24, marginTop: 20},
  imageContainer: {flexDirection: 'row'},
  image: {
    width: 40,
    height: 40,
    borderRadius: 44,
  },
});
