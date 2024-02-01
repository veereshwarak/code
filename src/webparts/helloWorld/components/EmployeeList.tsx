import {Label, Stack } from "@fluentui/react";
import * as React from "react";
import IndiaIcon from "./IndiaIcon";
import EmployeeDetail from "./EmployeeDetail";
import nature from '../assets/nature.png'

export interface EmployeeListProps {
    employeeObj: EmployeeObject
}

export interface EmployeeObject {
    firstName: string,
    lastName: string,
    imgUrl: string,
    designation: string,
    country: string,
    email: string,
    phone: number
}

const EmployeeList : React.FC<EmployeeListProps> = ({employeeObj}) => {
    const [isDialogOpen, setIsDialogOpen] = React.useState<boolean>(false);


  const closeDialog = (): void => {
    setIsDialogOpen(false);
  };

    const onClickEmployee = () => {
        setIsDialogOpen(true);
       
    }

    return(
        <div onClick={onClickEmployee}>
            <Stack styles={{root:{width:'100%', height:'100px', backgroundColor:'gray'}}}>
                <img src={nature} style={{height:'100px'}}/>
            </Stack>
            <Stack styles={{root:{paddingLeft:'20px', paddingTop:'10px'}}}>
                <Stack.Item style={{fontWeight:'500', fontSize:'16px'}}> {employeeObj.firstName} {employeeObj.lastName}</Stack.Item>
                <Stack.Item style={{fontWeight:'400', fontSize:'12px', paddingTop:'5px'}}> {employeeObj.designation}</Stack.Item>
                <Label style={{fontSize:'10px'}}>Location</Label>
                <Stack horizontal tokens={{childrenGap:20}}>
                    <Stack.Item style={{width:'10px', height:'10px'}}>
                        <IndiaIcon/>
                    </Stack.Item>
                    <Stack.Item>{employeeObj.country}</Stack.Item>
                </Stack>
            </Stack>
            {<EmployeeDetail isOpen={isDialogOpen} onDismiss={closeDialog} employee={employeeObj}/>}
        </div>

    )
}

export default EmployeeList;