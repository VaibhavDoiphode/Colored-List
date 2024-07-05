import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const courses = [
    {
      id: 1,
      name: 'React-Native',
      status: 'completed',
    },
    {
      id: 2,
      name: 'CSS',
      status: 'pending',
    },
    {
      id: 3,
      name: 'HTML',
      status: 'completed',
      status: '',
    },
    {
      id: 4,
      name: 'React-JS',
      status: 'completed',
    },
    {
      id: 5,
      name: 'Bootstrap',
      status: 'completed',
    },
    {
      id: 6,
      name: 'JavaScript',
      status: 'pending',
    },
    {
      id: 7,
      name: 'JQuery',
      status: 'pending',
    },
    {
      id: 8,
      name: 'Java',
      status: 'Completed',
    },
    {
      id: 9,
      name: 'SQL',
      status: 'completed',
    },
    {
      id: 10,
      name: 'Ruby',
      status: 'pending',
    },
    {
      id: 11,
      name: 'PHP',
      status: 'pending',
    },
    {
      id: 12,
      name: 'C++',
      status: 'pending',
    },
    {
      id: 13,
      name: 'Swift',
      status: 'completed',
    },
    {
      id: 14,
      name: 'Flutter',
      status: 'pending',
    },
  ];
  return (
    <ScrollView>
      <Text style={styles.headerText}>Courses Application</Text>
      <View style={styles.flatlistContainer}>
        <FlatList
          data={courses}
          renderItem={({item}) => (
            <Text style={[styles.flatlistText,
              item.status === 'pending' ? styles.grey : styles.yellow,]}
              >ID: {item.id} {'\n'}
              Name: {item.name} {'\n'}
              Status: {item.status} {'\n'} </Text>         
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  flatlistContainer: {
    alignItems: 'center',
  },
  flatlistText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 700,
    borderRadius: 5,
    borderBottomWidth:4,
    borderColor:'#000000',
    
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  grey: {
    backgroundColor: 'grey',
  },
});
export default App;