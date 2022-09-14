import { Link } from 'react-router-dom'
import Rplanet from './Rplanet'
import Bplanet from './Bplanet'
import Stars from './Stars'

const Footer = () => {
    return (
        <footer>
            <p>Mancoba Sihlongonyane &copy; 2022</p>
            <Link to='/about'>About</Link>
            {/* <Rplanet /> */}
            {/* <Bplanet /> */}
            <Stars />

        </footer>
    )
}

export default Footer