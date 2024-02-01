import * as React from "react";
import {
    TableBody,
    TableCell,
    TableRow,
    Table,
    TableHeader,
    TableHeaderCell,
    TableCellLayout,
} from "@fluentui/react-components";
import axios from "axios";
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Stack, IStackTokens } from '@fluentui/react';
import UpdateCustomer from "./UpdateCustomer";
import { CreateCustomer } from "./CreateCustomer";
import { sp } from "@pnp/sp";

const columns = [
    { columnKey: "FirstName", label: "FirstName" },
    { columnKey: "LastName", label: "Last Name" },
    { columnKey: "DOB", label: "Date Of Birth" },
    { columnKey: "Age", label: "Age" },
    { columnKey: "actions", label: "Actions" },
];

export const CustomerList = () => {
    const stackTokens: IStackTokens = { childrenGap: 5, padding: 10 };
    const [isOpen, setIsOpen] = React.useState(false);
    const [list, setList] = React.useState([]);
    const [customerId, setCustomerId] = React.useState(0)
    const [isCreateOpen, setIsCreateOpen] = React.useState(false);

    const fetchListData = async () => {
        await axios.get("https://cubicdirect.sharepoint.com/sites/VeereshwarSite/_api/web/lists/getbytitle('Customers')/items", {
            headers: {
                'Accept': 'application/json;odata=nometadata',
            },
            withCredentials: true,
            transformResponse: [(data) => {
                try {
                    console.log('data inside try', data)
                    const parseData = JSON.parse(data);
                    return parseData.value;
                }
                catch (e) {
                    console.error('Error parsing JSON', e)
                    return data
                }
            }]
        })
            .then(response => {
                setList(response.data)
            })
            .catch((error) => {
                console.error(error)
            })

    }


    React.useEffect(() => {
        fetchListData().then((data)=> console.log(data)).catch((err)=> console.error(err))
    }, [])

    React.useEffect(() => {
        sp.setup({
            sp: {
                baseUrl: 'https://cubicdirect.sharepoint.com/sites/VeereshwarSite'
            }
        });
    }, [])

    const toCreateCustomer = () => {
        setIsCreateOpen(true)
    }

    const dismissPanel = () => {
        setIsOpen(false)
    }

    const openPanel = (id: number) => {
        setIsOpen(true)
        setCustomerId(id)
    }

    const dismissCreatePanel = () => {
        setIsCreateOpen(false)
    }


    const onDeleteCustomer = async (id: any) => {
        await sp.web.lists.getByTitle('Customers').items.getById(id).delete().then((result: any) => {
            fetchListData().then((data)=> console.log(data)).catch((err)=> console.error(err))
        }).catch((error: any) => {
            console.log(error)
        });
    }

    const formattedString = (utcString: string) => {
        const date = new Date(utcString);
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        return formattedDate;
    }


    return (
        <>
            <Table arial-label="Default table">
                <TableHeader>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHeaderCell key={column.columnKey}>
                                {column.label}
                            </TableHeaderCell>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {list.map((item: any) => (
                        <TableRow key={item.Age}>
                            <TableCell>
                                <TableCellLayout>
                                    {item.FirstName}
                                </TableCellLayout>
                            </TableCell>
                            <TableCell>
                                <TableCellLayout
                                >
                                    {item.LastName}
                                </TableCellLayout>
                            </TableCell>
                            <TableCell>
                                {formattedString(item.DOB)}
                            </TableCell>
                            <TableCell>
                                <TableCellLayout>
                                    {item.Age}
                                </TableCellLayout>
                            </TableCell>
                            <Stack horizontal tokens={stackTokens}>
                                <PrimaryButton text="Edit" allowDisabledFocus
                                    onClick={(id) => openPanel(item.ID)}
                                />
                                <PrimaryButton text="Delete" allowDisabledFocus style={{ color: 'white', backgroundColor: 'red' }} onClick={(id) => onDeleteCustomer(item.ID)} />
                            </Stack>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div style={{ justifyContent: 'space-evenly', display: 'flex', marginTop: '10px' }}>
                <button style={{ backgroundColor: 'lightseagreen', color: 'white', border: 'none', width: '150px', height: '30px' }} onClick={toCreateCustomer}>Create Customer</button>

            </div>
            {isCreateOpen && <CreateCustomer isCreateOpen={isCreateOpen} dismissCreatePanel={dismissCreatePanel} fetchListData={fetchListData}/>}
            {isOpen && <UpdateCustomer isOpen={isOpen} dismissPanel={dismissPanel} customerId={customerId} fetchListData={fetchListData} />}
        </>
    );
};