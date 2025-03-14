import { NavLink as NL } from 'react-router'

export const NavLink = ({ to, value }) => {
    return (
        <NL
            className={ ({ isActive })=>`nav-item nav-link ${isActive?'active':''}` }
            to={to}
        >
            {value}
        </NL>
    )
}