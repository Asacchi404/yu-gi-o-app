"use client";

import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

import { TodoList } from "../../../.next/types/TodoList";

/**
 * Todoリストの全機能を実装するコンポーネント
 *
 * @returns
 */
const Todo = () => {
  const todosList: TodoList[] = [];

  const [todos, setTodos] = useState<TodoList[]>(todosList);

  /**
   * Todoの削除を行う関数
   *
   * @param id number
   * @returns void
   */
  const deleteTodo = (id: number) => {
    const newTodos: TodoList[] = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  /**
   * Todoの登録を行う関数
   *
   * @param todo {TodoList}
   * @returns void
   */
  const createTodo = (todo: TodoList) => setTodos([...todos, todo]);

  return (
    <>
      <List todos={todos} deleteTodo={deleteTodo} />
      <Form createTodo={createTodo} />
    </>
  );
};

export default Todo;
