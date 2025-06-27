
import {
  View,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { getUsers } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserCard } from "./UserCard";
import { Logo } from "./Logo";

export  function Main() {
  const [users, setUsers] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <View style={{ paddingBottom: insets.top, paddingTop: insets.top, width: "100vw" }}>
      <View style={{ marginBottom: 20 }}>
        <Logo/>
      </View>
        {users.length === 0 ? (
          <ActivityIndicator color={"red"} size="large" />
        ) : (
          <FlatList
            data={users}
            keyExtractor={user => user.id}
            renderItem={({ item }) => <UserCard user={item} />} /* ES IMPORTANTE RENDERIZAR LO DE ESTA MANERA ({ item }) =>  DE OTRA FORMA NO TRAERA LA INFORMACIÓN ESPERADA */
          />
        )}
        
    </View>
  );
}