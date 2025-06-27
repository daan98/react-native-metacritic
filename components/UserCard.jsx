
import { View, Image, Text, StyleSheet } from 'react-native'

export const UserCard = ({ user }) => {
  return (
    <View key={user.id} style={styles.card}>
        {
            <Image
            source={{
                uri:
                user.id % 2 === 0
                    ? "https://cdn.pixabay.com/photo/2019/10/22/13/43/portrait-4568762_1280.jpg"
                    : "https://cdn.pixabay.com/photo/2017/06/06/16/48/woman-2377742_1280.jpg",
            }}
            style={styles.image}
            />
        }
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.phone}>{user.phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card: {
    marginTop: 10
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000000",
  },
  email: {
    fontSize: 16,
    color: "#000000",
  },
  phone: {
    fontSize: 16,
    marginTop: 10,
    color: "#000000",
  },
});