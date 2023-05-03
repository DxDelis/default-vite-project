import { Button, Center,Tabs, TabList, TabPanels, Tab, TabPanel  } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const Home = () => (
    <><Center h="100vh">
      <header>
        <div>
            <span className='logo'> Vise shipping</span>
        </div>
        <div className='presentation'></div>
    </header>
    
    <footer>
        Все права защищены &copy;
      </footer>     
    </Center>
    <Tabs variant='soft-rounded' colorScheme='green'>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <p>one!</p>
      </TabPanel>
      <TabPanel>
        <p>two!</p>
      </TabPanel>
    </TabPanels>
  </Tabs></>

  
      
    
)
