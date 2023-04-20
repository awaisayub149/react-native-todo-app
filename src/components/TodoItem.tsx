import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
        <Text style={[styles.title, todo.completed && styles.completed]}>{todo.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#bbb',
  },
  delete: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default TodoItem;
