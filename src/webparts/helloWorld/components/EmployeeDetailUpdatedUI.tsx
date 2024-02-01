import { Label, Stack } from "@fluentui/react";
import React from "react";
import nature from '../assets/nature.png'

interface EmployeeDetailUpdated {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    country: string,
    designation: string
}

const EmployeeDetailUpdated: React.FC<EmployeeDetailUpdated> = ({firstName, lastName, email, phone, country, designation}) => {
    return (
        <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Stack.Item style={{ width: '25%', height: '400px', backgroundColor: 'white', borderRadius: 10, border: '2px solid #ddd' }}>
                <Stack tokens={{ childrenGap: 10 }}>
                    <Stack.Item>
                        <img src={nature} style={{ width: '100px', height: '100px', borderRadius: '50px', position: 'absolute', top: '8%', left: '5%' }} />
                        <Label style={{ fontWeight: 'bold', marginTop: '140px', textAlign: 'center', marginBottom: '10px', borderBottom: '1px solid #ddd' }}>{firstName} {lastName}</Label>
                    </Stack.Item>
                    <Stack.Item style={{ marginLeft: 10 }}>
                        <Label style={{ fontSize: '10px', color:'gray' }}>Title</Label>
                        <Label style={{ fontSize: '12px' }}>{designation}</Label>
                    </Stack.Item>
                    <Stack.Item style={{ marginLeft: 10 }}>
                        <Label style={{ fontSize: '10px', color:'gray' }}>Email</Label>
                        <Label style={{ fontSize: '12px' }}>{email}</Label>
                    </Stack.Item>
                    <Stack.Item style={{ marginLeft: 10 }}>
                        <Label style={{ fontSize: '10px', color:'gray' }}>phone</Label>
                        <Label style={{ fontSize: '12px' }}>{phone}</Label>
                    </Stack.Item>
                </Stack>
            </Stack.Item>
            <Stack.Item style={{ width: '75%', height: '400px', backgroundColor: 'white'}}>
                <Stack tokens={{ childrenGap: 20 }}>
                    <Stack.Item grow={2} style={{ height: '120px', backgroundColor: 'white', borderRadius: 10 }}>
                        <Stack horizontal tokens={{childrenGap: 20}} style={{height:'120Px'}}>
                            <Stack.Item grow={3} style={{borderRadius:'10px', border: '2px solid lightgray'}}>
                                <Label style={{textAlign:'center', marginTop:'20px', color:'gray'}}>Location</Label>
                                <Label style={{textAlign:'center', fontSize:'16px', fontWeight:'bold'}}>{country}</Label>
                            </Stack.Item>
                            <Stack.Item grow={3} style={{borderRadius:'10px', border: '2px solid lightgray'}}>
                                <Label style={{textAlign:'center', marginTop:'20px', color:'gray'}}>Working Hours</Label>
                                <Label style={{textAlign:'center', fontSize:'16px', fontWeight:'bold'}}>9:00am-5:00pmIST</Label>
                            </Stack.Item>
                        </Stack>
                    </Stack.Item>
                    <Stack.Item grow={3} style={{ height: '230px', backgroundColor: 'white', borderRadius: 10, border: '2px solid lightgray' }}>
                        <Label style={{fontSize:'12px'}}>
                        <p style={{marginLeft:'10px'}}>A software developer is a skilled professional deeply involved in the creation, implementation, and maintenance of software applications. Their primary responsibility revolves around writing code using various programming languages, such as Java, Python, C++, or JavaScript, to build robust and functional software systems. This coding process involves translating user requirements or business needs into actual software solutions.</p>
                        <p style={{marginLeft:'10px'}}>One of the distinctive qualities of a software developer is their role as a problem solver. They not only address issues within existing software but also strive to devise innovative solutions that enhance overall system functionality. Collaboration is integral to the work of a software developer, as they often function within interdisciplinary teams, interacting with designers, product managers, and quality assurance engineers to bring a holistic approach to software development.</p>
                        </Label>
                    </Stack.Item>
                </Stack>
            </Stack.Item>
        </Stack>
    )
}

export default EmployeeDetailUpdated;