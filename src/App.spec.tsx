import { render, screen } from "@testing-library/react"
import App from "./App"
import { NewTaskButton } from "./Components/NewTaskButton"

describe('App component', () => {
  it('should render correctly', () => {
    render(<App />)

    expect(screen.getByText('Choose your task')).toBeInTheDocument()
    expect(screen.getByText('Check your task')).toBeInTheDocument()
    expect(screen.getByText('Update your task')).toBeInTheDocument()
    expect(screen.getByText('Delete your task')).toBeInTheDocument()
  })

  it('should be able to add a new task', () => {
    render(<NewTaskButton />)

    expect(screen.getByTestId('addButton')).toBeInTheDocument()


  })
})