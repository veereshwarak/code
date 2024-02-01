import { sp } from "@pnp/sp";
import * as React from "react";
import { TextField } from '@fluentui/react/lib/TextField';
import { IStackProps, Stack } from '@fluentui/react/lib/Stack';
import { DatePicker,IPersonaProps,defaultDatePickerStrings, Label } from "@fluentui/react";
import axios from "axios";
import { Panel } from '@fluentui/react/lib/Panel';
import { PeoplePickerNormalExample } from "./Temp";

export interface updateCustomerProps {
    isOpen: boolean
    dismissPanel: ()=> void
    customerId: number
    fetchListData: () => void

}

const UpdateCustomer : React.FC<updateCustomerProps> = ({isOpen, dismissPanel, customerId,fetchListData}) => {
    const [inputCustomer, setInputCustomer] = React.useState({
        FirstName: '',
        LastName: '',
        DOB: '',
        Age: 1,
        personsId: []
    }) 

    console.log('inputCustomer--', inputCustomer)

    React.useEffect(()=> {
        sp.setup({
            sp: {
              baseUrl: 'https://cubicdirect.sharepoint.com/sites/VeereshwarSite'
            }
          });
    }, [])

    React.useEffect(() => {
        axios.get("https://cubicdirect.sharepoint.com/sites/VeereshwarSite/_api/web/lists/getbytitle('Customers')/items", {
            headers: {
                'Accept': 'application/json;odata=nometadata',
            },
            withCredentials: true,
            transformResponse: [(data) => {
                try {
                    console.log('data inside try22', data)
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
                const result = response.data.filter((item: any)=> item.ID=== customerId)
                setInputCustomer(result[0])
            })
            .catch((error) => {
                console.error(error)
            })

    }, [])

    const stackTokens = { childrenGap: 10 };
    const columnProps: Partial<IStackProps> = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } },
      };

      const onUpdateData=async()=> {
                await sp.web.lists.getByTitle('Customers').items.getById(customerId).update({FirstName: inputCustomer.FirstName, LastName:inputCustomer.LastName,DOB:inputCustomer.DOB, Age: inputCustomer.Age, personsId: {results: inputCustomer.personsId}}).then((result: any) => {
                        dismissPanel()
                        fetchListData()
                      }).catch((error: any) => {
                        console.log(error)
                      });
      }

      const handleInputChange = (event: any) => {
        let { name, value } = event.target;
        setInputCustomer((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    }

    const selectDate = (date: any) => {
        setInputCustomer((prevValues) => ({
            ...prevValues,
            ['DOB']: date,
        }));
    }

    const setSelectedPersons = (persons: IPersonaProps[]) => {
        const ids = persons?.map((person: IPersonaProps) => person?.key);
        setInputCustomer((prevValues: any)=> ({
            ...prevValues,
            personsId: ids
        }))
}

React.useEffect(() => {
    // Fetch person data based on person IDs in inputCustomer.personsId
    const fetchPersonData = () => {
      Promise.all(
        inputCustomer.personsId.map((personId) =>
          sp.web.siteUsers.getById(personId).get().then((person) => (
            {
            key: person.Id,
            text: person.Title,
            // Add other properties as needed
          }
          ))
        )
      )
        .then((personsData) => {
          console.log('personsData', personsData);
          // setPersons(personsData);
        })
        .catch((error) => {
          console.error('Error fetching person data:', error);
        });
    };
  
    if (inputCustomer.personsId.length > 0) {
      fetchPersonData();
    }
  }, [inputCustomer.personsId]);

    return(
        <Panel
          headerText="Customer"
          isOpen={isOpen}
          onDismiss={dismissPanel}
          closeButtonAriaLabel="Close"
        >
        <Stack {...columnProps} tokens={stackTokens}>
            <TextField label="First Name" name="FirstName" value={inputCustomer.FirstName} onChange={handleInputChange} />
            <TextField label="Last Name" name="LastName" value={inputCustomer.LastName} onChange={handleInputChange}/>
                    <DatePicker
                        placeholder="Select a date..."
                        ariaLabel="Select a date"
                        strings={defaultDatePickerStrings}
                        value={new Date(inputCustomer.DOB)}
                        onSelectDate={selectDate}
                    />
                 <input
                        type="number"
                        placeholder="please enter age"
                        name="Age"
                        value={inputCustomer.Age}
                        onChange={handleInputChange}
                    />   
                    <Label>People picker</Label>
                    <PeoplePickerNormalExample setSelectedPersons={setSelectedPersons}/>

            <button style={{ backgroundColor: 'lightseagreen', color: 'white', border: 'none', width: '150px', height: '30px', marginTop: '20px' }} onClick={onUpdateData}>Submit</button>
        </Stack>
        </Panel>

    )
}

export default UpdateCustomer;