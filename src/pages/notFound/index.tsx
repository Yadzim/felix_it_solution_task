import { FC } from "react";
import { Link } from "react-router-dom";
import not_found from 'assets/images/not_found.png'
import { Button } from "antd";

const NotFound: FC = (): JSX.Element => {

  console.log("not found");

  return (
    <div className="d-f flex-col" >
      <img src={not_found} alt="No data" />
      <div className="d-f mt-[72px] gap-4">
        <Link to='/'><Button type="primary" size="large" className="px-3 w-[240px]">Back home</Button></Link>
        <Button size="large" className="px-3 w-[240px]">Back home</Button>
      </div>
    </div>
  )
}

export default NotFound;