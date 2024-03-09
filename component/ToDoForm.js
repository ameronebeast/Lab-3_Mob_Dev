import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoForm = () => {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        placeholderTextColor="#999" // Lighter placeholder text color for a subtle look
      />
      <Button title="Add" color="#4CAF50" /> // A vibrant green color for the button
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#E8F5E9', // A light green background for a refreshing vibe
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25, // Slightly higher shadow opacity for better depth
    elevation: 3, // Slightly higher elevation for more pronounced shadow
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#4CAF50', // Green border color to match the button
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    color: '#555', // Darker text color for better readability
    borderRadius: 4,
  },
});

export default ToDoForm;
