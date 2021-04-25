import { IconButton } from '@chakra-ui/button';
import { Heading, useColorMode, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import useTodo from './hooks/useTodo';

function App() {
  const [todos, addTodo, deleteTodo] = useTodo()
  const { colorMode, toggleColorMode } = useColorMode()

  const buttonProps = {
    size: 'lg',
    isRound: true,
    alignSelf: 'flex-end',
    icon: colorMode === 'light' ? <FaMoon /> : <FaSun />,
    'aria-label': 'Switch DarkMode',
  }

  return (
    <VStack p={4}>
      <IconButton onClick={toggleColorMode} {...buttonProps} />
      {/* <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip='text'>Todo App</Heading> */}
      <Heading size='2xl'>Chakra UI Todo App</Heading>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default App;
