import { Dialog, DialogType, Stack, Separator, Label, IconButton } from '@fluentui/react';
import * as React from 'react';
import nature from '../assets/nature.png'
import { mergeStyles } from '@fluentui/react/lib/Styling';

interface EmployeeDetailDialogProps {
    isOpen: boolean;
    onDismiss: () => void;
    employee: EmployeeProps
}

interface EmployeeProps {
    firstName: string,
    lastName: string,
    imgUrl: string,
    designation: string,
    country: string,
    email: string,
    phone: number
}

const EmployeeDetail: React.FC<EmployeeDetailDialogProps> = ({ isOpen, onDismiss, employee }) => {

    const onDialogClose = (): void => {
        onDismiss();
    };

    const modalPropsStyles = { main: { maxWidth: 450 } };

    const dialogStyles = {
        main: {
          maxWidth: '1000px', // Set the desired maximum width
        },
      };
    
      const customStyles = mergeStyles(dialogStyles);

    return (
        <Dialog
            hidden={!isOpen}
            onDismiss={onDialogClose}
            dialogContentProps={{
                type: DialogType.normal,
                title: 'Employee Details',
            }}
            modalProps={{
                isBlocking: false, // Set to true for a blocking modal
                styles: modalPropsStyles
            }}
            styles={{ main: customStyles }}
        >
            <Stack horizontal horizontalAlign="end">
                <IconButton
                    iconProps={{ iconName: 'Cancel' }}
                    ariaLabel="Close"
                    onClick={onDialogClose}
                />
            </Stack>
            <Stack horizontal tokens={{ childrenGap: 20 }}>
                <Stack.Item styles={{ root: { width: '100px', height: '100px', borderRadius: '50px', backgroundColor: 'lightgray' } }}>
                    <img src={nature} style={{width:'100px', height:'100px', borderRadius:'50px'}}/>
                </Stack.Item>
                <Stack>
                    <Stack.Item>
                        <Label style={{ fontSize: '18px', fontWeight: 'bold' }}>{employee.firstName} {employee.lastName}</Label>
                    </Stack.Item>
                    <Stack.Item>
                        {employee.designation}
                    </Stack.Item>
                    <Separator />
                    <Stack.Item>
                        <Label style={{ fontSize: '12px', fontWeight: 'bold' }}>Location</Label>
                    </Stack.Item>
                    <Stack.Item>
                        <Label style={{ fontSize: '12px', fontWeight: '500' }}>{employee.country}</Label>
                    </Stack.Item>
                </Stack>
            </Stack>
            <Label style={{ fontSize: '14px', fontWeight: 'bold' }}>About</Label>
            <p>
                I am a software developer passionate about creating efficient and innovative solutions, with expertise in React.
            </p>
        </Dialog>
    );
};

export default EmployeeDetail;