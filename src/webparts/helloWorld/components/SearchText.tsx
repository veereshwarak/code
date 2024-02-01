// import * as React from 'react';
// import { SearchBox, List, IStackTokens, Stack } from '@fluentui/react';

// const SearchText = () => {
//   const [filterText, setFilterText] = React.useState<string>('');
//   const [items] = React.useState([
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Doe' },
//     { id: 3, name: 'Bob Smith' },
//     // Add more items as needed
//   ]);

//   const filteredItems = items.filter(item =>
//     item.name.toLowerCase().includes(filterText?.toLowerCase())
//   );

//   const stackTokens: IStackTokens = { childrenGap: 10 };

//   return (
//     <Stack tokens={stackTokens}>
//      <SearchBox
//         placeholder="Filter by Name"
//         onChange={(ev, newValue) => newValue && setFilterText(newValue)}
//       />
//       <List items={filteredItems} onRenderCell={(item) => <div>{item?.name}</div>} />
//     </Stack>
//   );
// };

// export default SearchText;