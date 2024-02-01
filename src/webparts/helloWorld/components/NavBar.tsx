import * as React from 'react';
import { initializeIcons, INavLink, INavStyles, Nav, Stack } from '@fluentui/react';
import AppBar from './AppBar';
// import { HomeFilled, NavigateForward } from '@fluentui/react-icons-mdl2';

export const list = [
  {
    firstName:'veereshwar',
    lastName: 'Ak',
    imgUrl:'Image 50*50',
    designation: 'Software Developer',
    country: 'India'
  },
  {
    firstName:'Basavaraj',
    lastName: 'M',
    imgUrl:'Image 50*50',
    designation: 'Software Developer',
    country: 'India'
  },
  {
    firstName:'Testing-start',
    lastName: '-end',
    imgUrl:'Image 50*50',
    designation: 'Sales',
    country: 'India'
  },
  {
    firstName:'Testtt',
    lastName: 'man',
    imgUrl:'Image 50*50',
    designation: 'Sales',
    country: 'India'
  }
]

export const Sales = () => {
  const salesList = list.filter(item => item.designation === 'Sales');

  return(
    <div>
    <AppBar header='Sales Team Members' list={salesList}/>
  </div>
  )
  
};

const Home = () => (
  <div>
    <AppBar header='All Team Members' list={list}/>
  </div>
);
const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
  },
};



const NavBar: React.FC = () => {
  const [selectedNavItem, setSelectedNavItem] = React.useState('All');

  const onLinkClick = (ev: React.MouseEvent<HTMLElement>, item?: INavLink): void => {
 if (item && item.key) {
      setSelectedNavItem(item.key);
    }
  };

  const navLinks = [
    {
      name: 'Employees', key: 'Employees', url: '#', isExpanded: true,
      links: [
        { name: 'All', key: 'All', url: '#', onClick: (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => onLinkClick(ev, item) },
        { name: 'Sales', key: 'Sales', url: '#', onClick: (ev: React.MouseEvent<HTMLElement>, item?: INavLink) => onLinkClick(ev, item) },
      ],
    },
  ];

  // const breadcrumbItems: IBreadcrumbItem[] = [
  //   { text: 'Employees', key: 'Employees', onClick: () => setSelectedNavItem('Employees') },
  //   { text: 'All', key: 'All', onClick: () => setSelectedNavItem('All') },
  //   { text: 'Other Page', key: 'OtherPage', isCurrentItem: true },
  // ];

  return (
    <Stack horizontal>
      {/* Left Side Navigation */}
      <Stack.Item styles={{ root: { width: '200px', padding: '10px' } }}>
        <p>Employee Directory</p>
        <Nav
          groups={[{ links: navLinks }]}
          styles={navStyles}
          onLinkClick={onLinkClick}
          selectedKey={selectedNavItem}
        />
      </Stack.Item>

      {/* Right Side Content */}
      <Stack.Item grow>
        {/* <Breadcrumb items={breadcrumbItems} /> */}
        <Stack padding="10px">
          {selectedNavItem === 'Employees' && <Home />}
          {selectedNavItem === 'All' && <Home />}
          {selectedNavItem === 'Sales' && <Sales/>}
        </Stack>
      </Stack.Item>
    </Stack>
  );
};

initializeIcons(); // Initialize Fluent UI icons

export default NavBar;