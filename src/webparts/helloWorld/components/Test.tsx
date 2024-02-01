import { IPersonaProps, NormalPeoplePicker } from "@fluentui/react";
import * as React from "react";

const data = [
    {
        key:'1', name:'veeresh-1'
    },
    {
        key:'2', name:'basu-2'
    },
    {
        key:'3', name:'abhi-3'
    },
    {
        key:'4', name:'venky-2'
    }
]

 const Test : React.FC = () => {

    const [selectedItems, setSelectedItems] = React.useState([])

    const onFilterChanged = ( filterText: string,
        currentPersonas: IPersonaProps[],
        limitResults?: number) => {
       if(filterText){
            const filteredData = data.filter(person => 
               currentPersonas.some(p=> p.key === person.key) &&
                person.name.toLowerCase().indexOf(filterText.toLowerCase()) !== -1
                )
             return filteredData;
       }
       else{
        return []
       }
    }

    const onchange = (items: any) => {
        setSelectedItems(items)
    }

    return(
        <div>
            <NormalPeoplePicker 
                onResolveSuggestions={onFilterChanged}
                onChange={onchange}  
                selectedItems={selectedItems}              
            />
        </div>
    )
}

export default Test;