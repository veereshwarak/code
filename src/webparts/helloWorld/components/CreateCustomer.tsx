import * as React from "react";
import { DatePicker,IPersonaProps,IStackProps,Label,defaultDatePickerStrings } from "@fluentui/react";
import {sp} from '@pnp/sp/presets/all'
import { Panel, Stack, TextField } from "@fluentui/react";
import { PeoplePickerNormalExample } from "./Temp";


export interface CreateCustomerProps {
    isCreateOpen: boolean
    dismissCreatePanel: ()=> void
    fetchListData: () => void
}

export const CreateCustomer : React.FC<CreateCustomerProps> = ({isCreateOpen, dismissCreatePanel, fetchListData}) => {
    const [inputCustomer, setInputCustomer] = React.useState({
        FirstName: '',
        LastName: '',
        DOB: new Date(),
        Age: 0,
    })


    React.useEffect(()=> {
        sp.setup({
            sp: {
              baseUrl: 'https://cubicdirect.sharepoint.com/sites/VeereshwarSite'
            }
          });
    }, [])

    const stackTokens = { childrenGap: 10 };
    const columnProps: Partial<IStackProps> = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
      };

    const onSaveData = async() => {
         await sp.web.lists.getByTitle('Customers').items.add(inputCustomer).then((result: any) => {
                dismissCreatePanel()
                fetchListData()
        })
    }

    const handleInputChange = (event: any) => {
        let { name, value } = event.target;
        setInputCustomer((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const setSelectedPersons = (persons: IPersonaProps[]) => {
        const ids = persons.map((person: IPersonaProps) => person.key);
        setInputCustomer((prevValues) => ({
        ...prevValues,
        personsId: { results: ids },
    }));
        
    }

    const onSelectDate = (date: any) => {
        setInputCustomer((prevValues) => ({
            ...prevValues,
            ['DOB']: date,
        }));
    }

    return (
        <>
        <Panel
          headerText="Customer"
          isOpen={isCreateOpen}
          onDismiss={dismissCreatePanel}
          // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
          closeButtonAriaLabel="Close"
        >
        <Stack {...columnProps} tokens={stackTokens}>
            <TextField label="First Name" name="FirstName" value={inputCustomer.FirstName} onChange={handleInputChange} />
            <TextField label="Last Name" name="LastName" value={inputCustomer.LastName} onChange={handleInputChange}/>
                    <Label>Date of birth</Label>
                    <DatePicker
                        placeholder="Select a date..."
                        ariaLabel="Select a date"
                        strings={defaultDatePickerStrings}
                        onSelectDate={onSelectDate}
                    />
                    <Label>Age</Label>
                 <input
                        type="number"
                        placeholder="please enter age"
                        name="Age"
                        value={inputCustomer.Age}
                        onChange={handleInputChange}
                    />   
                <Label>People picker</Label>
                <PeoplePickerNormalExample setSelectedPersons={setSelectedPersons}/>

            <button style={{ backgroundColor: 'lightseagreen', color: 'white', border: 'none', width: '150px', height: '30px', marginTop: '20px' }} onClick={onSaveData}>Submit</button>
        </Stack>
        </Panel>
        </>
    );
};