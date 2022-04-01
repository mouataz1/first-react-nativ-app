import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/*creating the home view */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          All tasks
        </Text>
          <View style={styles.items}>
            {/* the container where the tasks will be displayed */}
              <Task text={'Set up the env'}/>
              <Task text={'create new project'}/>
              <Task text={'build the project'}/>
              <Task text={'connect the phone'}/>
              <Task text={'start coding'}/>
              <Task text={'make a presentation'}/>
              <Task text={'be prepared for the day'}/>
              <Task text={'get mor points on exam'}/>
          </View>
       

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16788D',
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold',
},
items: {
  marginTop: 30,
},
});
