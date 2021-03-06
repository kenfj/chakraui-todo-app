import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import React, { FormEvent, useRef } from 'react'
import { Todo } from '../hooks/useTodo'

type Props = {
  addTodo: (todo: Todo) => void
}

function AddTodo({ addTodo }: Props) {
  const contentRef = useRef<HTMLInputElement>(null)

  // https://chakra-ui.com/docs/feedback/toast
  const toast = useToast()

  const toastError = (title: string) => toast({
    title: title,
    status: 'error',
    duration: 2000,
    isClosable: true,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (contentRef.current === null)
      return

    if (!contentRef.current.value) {
      toastError('No content')
      return
    }

    const todo: Todo = {
      id: nanoid(),
      body: contentRef.current.value
    }

    addTodo(todo)
    contentRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack m='8'>
        <Input variant='filled' placeholder='learning Chakra UI' ref={contentRef} />
        <Button type='submit' colorScheme='green' px='8'>Add Todo</Button>
      </HStack>
    </form>
  )
}

export default AddTodo
