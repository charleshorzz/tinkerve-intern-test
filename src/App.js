import { Container} from 'react-bootstrap';
import { Outlet } from "react-router-dom"

function App() {
  // const [servingNumber, setServingNumber] = useState('')
  // const [lastServingNumber, setLastServingNumber] = useState('')

  return (
      <>
        <main className='py-3'>
          <Container>
            <Outlet />
          </Container>
        </main>
      </>
  );
}

export default App;
