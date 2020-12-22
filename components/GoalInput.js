import React,{useState} from 'react';
import {View,TextInput,StyleSheet,Button,Modal} from 'react-native';

const GoalInput = props => {
	const [enteredGoal,setEnteredGoal]= useState('');
	const goalinput=(enteredText)=>{
		setEnteredGoal(enteredText);
	};
	const addGoalHandler =()=>{
		props.onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	return(
		<Modal visible={props.visible}>
			<View style={styles.header}>
	        	<TextInput placeholder="Enter your Goals" 
	        	style={styles.input} 
	        	onChangeText={goalinput} 
	        	value={enteredGoal}/>
	        	<View style={styles.butt}>
		        	<Button title="CANCEL" color="red" onPress={props.onCancel}/>
		        	<Button title="ADD" onPress={addGoalHandler}/>
	        	</View>
	        </View>
        </Modal>
	);

};

const styles=StyleSheet.create({
	header:{
		flex: 1,
		justifyContent:'center',
		alignItems: 'center'
	},
	input:{
		width: 300,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		margin: 10
	},
	butt:{
		margin: 10,
		flexDirection: 'row',
		justifyContent:'space-between',
		width: '40%'
	},
});

export default GoalInput;