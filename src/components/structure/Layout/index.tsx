import Sidebar from "components/structure/Sidebar";
import { FC } from "react";
import Header from "../Header";
import { LayoutWrapper } from "./styled";

const Layout: FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {

  console.log("layout");

  return (
    <LayoutWrapper>
      <Header />
      <Sidebar/>
      <div className="content">
      {children}
      </div>
    </LayoutWrapper>
  )
}

export default Layout;