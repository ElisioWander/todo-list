import { render, screen } from "@testing-library/react"
import { Task } from "."

interface TaskProps {
  task: string;
  handleDeleteTask: (task: string) => void;
}

const TaskProps = {
  task: 'fake-task-1',
  handleDeleteTask: jest.fn()
}

describe('Task component', () => {
  it('Should render list items', () => {
    render(<Task task={TaskProps} />)
  })
})