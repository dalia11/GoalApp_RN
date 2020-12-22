import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props => {
	return(
		<TouchableOpacity onPress={props.onDelete}>
			<View style={styles.lista}>
	        	<Text>{props.title}</Text>
	        </View>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
	lista:{
	padding: 10,
	backgroundColor: '#ccc',
	borderColor: 'black',
	borderWidth: 1,
	marginVertical: 10
	},

});

export default GoalItem;