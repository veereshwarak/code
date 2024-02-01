// import {
//     NormalPeoplePicker
//   } from '@fluentui/react/lib/Pickers';
// import * as React from "react"
// import { useState } from "react"

// export const mru = [
//     {
//         id:1,
//         name: 'veeresh'
//     },
//     {
//         id:2,
//         name: 'virat'
//     },
//     {
//         id:3,
//         name: 'Basu'
//     },
// ]


// export const peoples = [
//     {
//         id:1,
//         name: 'veeresh'
//     },
//     {
//         id:2,
//         name: 'virat'
//     },
//     {
//         id:3,
//         name: 'Basu'
//     },
//     {
//         id:4,
//         name: 'Abhi'
//     },
//     {
//         id:5,
//         name: 'Bengaluru'
//     }
// ]

// export interface IPersonaProps { 
//     id: number
//     name: string; 
// }

// export const TempTest : React.FC = () => {

//     const [peopleList, setPeopleList] = useState(peoples)
//     const [delayResults, setDelayResults] = React.useState(false);

//     function doesTextStartWith(text: string, filterText: string): boolean {
//         return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
//       }

//     const filterPersonasByText = (filterText: string): IPersonaProps[] => {
//         return peopleList.filter(item => doesTextStartWith(item.name as string, filterText));
//       };

//       function listContainsPersona(persona: IPersonaProps, personas: IPersonaProps[]) {
//         if (!personas || !personas.length || personas.length === 0) {
//           return false;
//         }
//         return personas.filter(item => item.name === persona.name).length > 0;
//       }

//       function removeDuplicates(personas: IPersonaProps[], possibleDupes: IPersonaProps[]) {
//         return personas.filter(persona => !listContainsPersona(persona, possibleDupes));
//       }

//       function convertResultsToPromise(results: IPersonaProps[]): Promise<IPersonaProps[]> {
//         return new Promise<IPersonaProps[]>((resolve, reject) => setTimeout(() => resolve(results), 2000));
//       }

//       const filterPromise = (personasToReturn: IPersonaProps[]): IPersonaProps[] | Promise<IPersonaProps[]> => {
//         if (delayResults) {
//           return convertResultsToPromise(personasToReturn);
//         } else {
//           return personasToReturn;
//         }
//       };

//     const onFilterChanged = (
//         filterText: string,
//         currentPersonas: IPersonaProps[],
//         limitResults?: number,
//       ): IPersonaProps[] | Promise<IPersonaProps[]> => {
//         if (filterText) {
//           let filteredPersonas: IPersonaProps[] = filterPersonasByText(filterText);
//           filteredPersonas = removeDuplicates(filteredPersonas, currentPersonas);
//           filteredPersonas = limitResults ? filteredPersonas.slice(0, limitResults) : filteredPersonas;
//           return filterPromise(filteredPersonas);
//         } else {
//           return [];
//         }
//       };

//     return(
//         <NormalPeoplePicker
//         // eslint-disable-next-line react/jsx-no-bind
//             onResolveSuggestions={onFilterChanged}
//         />
//     )
// }