import { StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/button/AppButton'
import { APP_COLOR } from '../utils/constant'
import Ionicons from '@expo/vector-icons/Ionicons';
type Props = {}
const WelcomePage = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContent}>
        <Text style={styles.header}>Welcome to</Text>
        <Text style={styles.brand}>ShopeeFood</Text>
        <Text style={styles.description}>Your favourite foods delivered fast at your door.</Text>
      </View>
      <View style={styles.welcomeGroupButton}>
        <Text>Sign in with</Text>
        <View>
          <AppButton
            title='Facebook'
            onPress={() => alert(1)}
            textStyle={{ textTransform: "uppercase" }}
            pressStyle={{ alignSelf: "stretch" }}
            btnStyle={{ backgroundColor: "red", justifyContent: "center" }}
            icons={(<Ionicons name="add-circle" size={24} color="white" />)}
          />
          <View><Text>Google</Text></View>
        </View>
        <View><Text>Start with your email</Text></View>
        <View><Text>Already have an account? Sign In</Text></View>
      </View>
    </View>
  )
}
export default WelcomePage
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    borderWidth: 5
  },
  welcomeContent: {
    flex: .6,
    borderColor: "blue",
    borderWidth: 5,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 28,
  },
  header: {
    fontSize: 53,
    fontWeight: '700'
  },
  brand: {
    fontSize: 53,
    fontWeight: '700',
    color: APP_COLOR.PRIMARY,
    marginVertical: 5
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    color: "#30384F"
  },
  welcomeGroupButton: {
    flex: .4,
    borderColor: "green",
    borderWidth: 5
  },
})