
import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
	const[courseGoals,setCourseGoals] = useState([]);
  const[isAddMode,setisAddMode]=useState(false);


	const addgoal= goalTitle =>{
		setCourseGoals(currentgoal =>[...courseGoals, {id: Math.random().toString(),value: goalTitle}]);
    setisAddMode(false);
	};
  const removegoal = goalId=>{
    setCourseGoals(currentgoal =>{
      return currentgoal.filter((goal) => goal.id !== goalId);
    });
  }
    const cancelPage = () =>{
    setisAddMode(false);
  };
  return (

        <View style={styles.screen}>
          <Button title="Add New Goal" onPress={() => setisAddMode(true)}/>
          <GoalInput visible={isAddMode} onAddGoal={addgoal} onCancel={cancelPage}/>
        	<FlatList 
        	keyExtractor = {(item, index)=>item.id}
        	data={courseGoals} renderItem={itemData =>( 
            <GoalItem onDelete={removegoal.bind(this, itemData.item.id)} title={itemData.item.value} />
        		)}
        	/>
        </View>

    );
};

const styles = StyleSheet.create({
	screen:{
		padding: 30
	},
});

export default App;
