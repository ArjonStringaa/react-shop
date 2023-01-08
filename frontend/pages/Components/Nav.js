import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, NavItems } from "../../styles/NavStyles";
import Cart from "../Components/Cart";
import { useStateContext } from "../../lib/context";
import User from "../Components/User";
import { useUser } from "@auth0/nextjs-auth0";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
export default function Nav() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { user, error, isLoading } = useUser();
  console.log(user);

  return (
    <NavStyles>
      <Link href="/">Styled.</Link>
      <NavItems>
        <User />
        <div onClick={() => setShowCart(true)}>
          {totalQuantities > 0 && (
            <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>
              {totalQuantities}
            </motion.span>
          )}
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <AnimatePresence>{showCart && <Cart />}</AnimatePresence>
    </NavStyles>
  );
}
