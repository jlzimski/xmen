import {
    Navbar,
    Nav,
    NavItem,
    // NavLink
} from 'reactstrap';
import Weather from '../apps/weather';

const Header = () => {
    return(
        <Navbar>
            <Nav className='ml=auto' navbar>
                <NavItem>
                    <Weather />
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Header;