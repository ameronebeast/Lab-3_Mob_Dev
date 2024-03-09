import React from 'react';
import { View, ScrollView, Text, Pressable, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable 
          key={index} 
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? '#dddddd' : 'transparent' } // Change background color on press for feedback
          ]}
        >
          <View style={[styles.task, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 4, 
  },
  task: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc', // Lighter border color
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, 
    shadowRadius: 2, 
    elevation: 2,
  },
  evenRow: {
    backgroundColor: '#e9efff', 
  },
  oddRow: {
    backgroundColor: '#ffffff', 
  },
  taskText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500', // Medium font weight for better readability
  },
});

export default ToDoList;
