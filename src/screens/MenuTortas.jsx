import TopButtons from '../components/molecules/TopButtons'
import Title from '../components/atoms/Title'
import Productos from '../components/organisms/Productos'
import './styles/Menu.css'

function MenuTortas() {

    const [otros, setOtros] = useState([])
    useEffect(() => {
        const obtenerDatos = async () => {
        const res = await fetch('https://6557a042bd4bcef8b612f95b.mockapi.io/pasteles/pasteles');
        const data = await res.json();
        setOtros([...data]);
        }
        obtenerDatos();
    }, [])

  return (
    <>
      <div className='menu'>
        <TopButtons />
        <Title title='Queques y Humintas'/>
        <Productos productos={otros}/>
      </div>
    </>
  )
}
export default MenuTortas