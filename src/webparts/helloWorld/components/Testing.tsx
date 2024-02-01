import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
import * as React from "react";

export default function Testing (props: any) {
    return(
        <>
        Hello worldddd
            <PeoplePicker
                context={props.contextData}
                titleText="People Picker"
                personSelectionLimit={3}
                groupName={"Team Site Owners"} // Leave this blank in case you want to filter from all users
                showtooltip={true}
                searchTextLimit={5}
                principalTypes={[PrincipalType.User]}
                resolveDelay={1000} 
                disabled={true}
            />
        </>
    )
}


// import * as React from 'react';
// import { sp } from '@pnp/sp/presets/all';
// import { PeoplePicker, PrincipalType } from '@pnp/spfx-controls-react/lib/PeoplePicker';
// import { Panel, Stack, TextField, DefaultButton } from '@fluentui/react';

// export interface MyComponentProps {
//   isOpen: boolean;
//   dismissPanel: () => void;
// }

// export const MyComponent: React.FC<MyComponentProps> = ({ isOpen, dismissPanel }) => {
//   const [selectedUsers, setSelectedUsers] = React.useState([]);

//   const onPeoplePickerChange = (items: any[]) => {
//     setSelectedUsers(items);
//   };

//   const onSaveData = async () => {
//     // Save the selected users to your SharePoint list or perform other actions
//     console.log('Selected Users:', selectedUsers);
//   };

//   React.useEffect(() => {
//     // Initialize PnPjs
//     sp.setup({
//       sp: {
//         baseUrl: 'https://cubicdirect.sharepoint.com/sites/VeereshwarSite',
//       },
//     });
//   }, []);

//   return (
//     <Panel
//       headerText="People Picker Example"
//       isOpen={isOpen}
//       onDismiss={dismissPanel}
//       closeButtonAriaLabel="Close"
//     >
//       <Stack tokens={{ childrenGap: 15 }} style={{ padding: 20 }}>
//         <TextField label="Other Input Field" />

//         <PeoplePicker
//           context={sp.web}
//           titleText="Select Users"
//           personSelectionLimit={3}
//           showtooltip={true}
//           isRequired={true}
//           selectedItems={selectedUsers}
//           showHiddenInUI={false}
//           principalTypes={[PrincipalType.User]}
//           resolveDelay={1000}
//           onChange={onPeoplePickerChange}
//           ensureUser={true}
//           disabled={false}
//           peoplePickerWPclassName=""
//           peoplePickerCntrlclassName=""
//         />

//         <DefaultButton onClick={onSaveData}>Save Data</DefaultButton>
//       </Stack>
//     </Panel>
//   );
// };
