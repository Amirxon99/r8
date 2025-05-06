import   './App.css'
import Card from './components/Card'


function App() {
  return (
   
    <div className='ota'>
        <Card ism="Emily Johnson" kasbi="Product Manager" soha="Product Development" bg="#FCF2E5"/>
        <Card ism="Arjun Patel" kasbi="Software Engineer" soha="Technology" bg="#FCF2E5"/>
        <Card ism="Carlos Hernández" kasbi="UI Designer" soha="Design" bg="#FCF2E5"/>
        <Card ism="Amina Idris" kasbi="Marketing Specialist" soha="Marketing" bg="#FCF2E5"/>
        <Card ism="Emily Johnson" kasbi="Product Manager" soha="Product Development" bg="white"/>
        <Card ism="Arjun Patel" kasbi="Software Engineer" soha="Technology" bg="white"/>
        <Card ism="Carlos Hernández" kasbi="UI Designer" soha="Design" bg="white"/>
        <Card ism="Amina Idris" kasbi="Marketing Specialist" soha="Marketing" bg="white"/>
      
      
    </div>
  )
}

export default App