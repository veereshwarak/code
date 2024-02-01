import * as React from "react";
import { Route, Routes, BrowserRouter} from 'react-router-dom'
// import { CreateCustomer } from "./CreateCustomer";
// import { CustomerList } from "./CustomerList";
// import Test from "./Test";
// import { PeoplePickerNormalExample } from "./Temp";
// import { CustomerList } from "./CustomerList";
import { CustomerList } from "./CustomerList";
// import UpdateCustomer from "./UpdateCustomer";


export default function HelloWorld (props: any) {
  return(
    <div>
    <BrowserRouter basename={location.pathname.split(".aspx")[0] + ".aspx"}>
      <Routes>
          <Route path="/" element={<CustomerList/>} />
          {/* <Route path="/createUser" element={<CreateCustomer/>} /> */}
          {/* <Route path="/updateUser/:id" element={<UpdateCustomer/>} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  )
}