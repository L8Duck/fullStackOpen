const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}
const Part = ({part,ex}) =>{
  return (
    <p>{part} {ex}</p>
  )
}
const Content = ({ex,part}) => {
  return (
    <>
      <Part part={part[0]} ex={ex[0]}/>
      <Part part={part[1]} ex={ex[1]}/>
      <Part part={part[2]} ex={ex[2]}/>
    </>
  )
}
const Total = ({total}) => {
  return(
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content ex={[exercises1,exercises2,exercises3]} part={[part1,part2,part3]}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
