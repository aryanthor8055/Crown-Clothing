import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from "./navigation.styles";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";


const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <CrwnLogo className="logo" />
                </LogoContainer>


                <NavLinks>
                    <NavLink to="/shop">Shop</NavLink>

                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>) : (
                            <NavLink to="/auth">SIGN IN</NavLink>

                        )
                    }
                    <CartIcon />

                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )

}
export default Navigation;