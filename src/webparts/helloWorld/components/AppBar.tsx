import { List, Stack, TextField } from "@fluentui/react"
import * as React from "react"
import EmployeeList from "./EmployeeList"

export interface AppBarProps {
    header: string
    list: Array<any>
}

const AppBar: React.FC<AppBarProps> = ({ header, list }) => {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filterData, setFilteredData] = React.useState<any>(list)

    const applyFilter = (term: string) => {
        const filtered = list.filter((item) =>
            item.firstName.toLowerCase().includes(term.toLowerCase()) || item.lastName.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const onSearchInputChange = (
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
    ): void => {
        if (newValue !== undefined) {
            setSearchTerm(newValue);
            applyFilter(newValue);
        }
    };



    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <div>
                    <h1>{header}</h1>
                </div>
                <div>
                    <TextField
                        label="Search"
                        onChange={onSearchInputChange}
                        value={searchTerm}
                    />
                    <List items={filterData} />
                </div>
            </div>

            <Stack horizontal styles={{ root: { maxWidth: '100%', flexWrap: 'wrap' } }}>
                {
                filterData?.map((item: any) => {
                    return (
                        <div style={{ border: '2px solid lightgray', width: '200px', height: '200px', maxWidth: '100%', marginBottom: '10px', marginRight: '10px', marginLeft: '10px' }}>
                            <EmployeeList employeeObj={item} />
                        </div>

                    )
                }
                )}
            </Stack>

        </>

    )
}

export default AppBar