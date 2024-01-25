import React, { FC } from "react";
import { FaBars, FaRegBell, FaRegHeart, FaShoppingCart, FaSignInAlt, FaUser } from "react-icons/fa";
import logo from "assets/images/logo.svg"
import { changeSidebar } from "store/ui";
import { useAppDispatch, useAppSelector } from "store";
import { HeaderWrapper } from "./styled";
import { Input } from "antd";
import { BiSearchAlt } from "react-icons/bi";


const Header: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector(state => state.ui.sidebar);

  const selectTheme = React.useMemo(() => {
    if (sidebar === "large") return "small";
    if (sidebar === "small") return "none";
    if (sidebar === "none") return "large";
    return "large"
  }, [sidebar]);

  return (
    <HeaderWrapper>
      <div className="left">
        <div className="logo">
          <img src={logo} alt="" />
          {/* <FaShoppingCart /> */}
          <h1><span className="name" >Books</span> List</h1>
        </div>
        <button className="e-btn py-1 px-2 d-f ms-4" onClick={() => dispatch(changeSidebar(selectTheme))}>
          <FaBars className="burger me-2" /> Categories
        </button>
        <div className="search d-f gap-2">
          <BiSearchAlt />
          <input placeholder="Search for any training you want " />
        </div>
      </div>
      <div className="right gap-4">
        <div className=" cursor-pointer hover:text-blue-500"><FaRegBell /></div>
        <div className="w-[30px] h-[30px] flex-center bg-element rounded-full cursor-pointer hover:text-blue-500"><FaUser /></div>
      </div>
    </HeaderWrapper>
  )
}

export default Header;