/**
 * My To Do List App
 *
 * @format
 */
import React, {useState} from 'react';
import {
    SafeAreaView,
} from 'react-native'

import ToDoList from './component/ToDoList';
import ToDoForm from './component/ToDoForm';

function App() {
    const[tasks, setTasks] = useState([
        'Do laundry',
    'Go to gym',
    'Walk dog']);

    return (
        <SafeAreaView>
  <ToDoList tasks={tasks} /> {/*Pass tasks as props here*/} 
  <ToDoForm />
        </SafeAreaView>
    );
}


export default App;