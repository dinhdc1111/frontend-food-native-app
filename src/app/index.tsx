import { StyleSheet, Text, View } from 'react-native'
import AppButton from 'components/button/AppButton'
import { APP_COLOR } from 'utils/constant'
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
        <View style={{
          borderBottomWidth: 1,
          borderBottomColor: "red",
          marginHorizontal: 50
        }}>
          <Text style={{
            padding: 10,
            textAlign: 'center',
            backgroundColor: "white",
            alignSelf: "center",
            position: "relative",
            top: 20
          }}>Sign in with</Text>
        </View>
        <View style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 40,
        }}>
          <AppButton
            title='facebook'
            onPress={() => alert(1)}
            textStyle={{ textTransform: "uppercase" }}
            btnStyle={{ justifyContent: "center", backgroundColor: "#fff", }}
            icons={(<Ionicons name="add-circle" size={30} color="#2c2c2c" />)}
          />
          <AppButton
            title='google'
            onPress={() => alert(1)}
            textStyle={{ textTransform: "uppercase" }}
            btnStyle={{
              backgroundColor: "#fff",
              justifyContent: "center",
              paddingHorizontal: 22
            }}
            icons={(<Ionicons name="add-circle" size={30} color="#2c2c2c" />)}
          />
        </View>
        <View>
          <AppButton
            title='Start with your email'
            onPress={() => alert(1)}
            textStyle={{ color: "#fff", paddingVertical: 5 }}
            pressStyle={{ alignSelf: "stretch" }}
            btnStyle={{
              backgroundColor: "#2c2c2c",
              justifyContent: "center",
              paddingHorizontal: 22,
              marginHorizontal: 40,
              maxWidth: 315
            }}
          />
        </View>
        <View>
          <Text style={{ textAlign: "center" }}>Already have an account? Sign In</Text>
        </View>
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
    borderWidth: 5,
    gap: 20
  },
})