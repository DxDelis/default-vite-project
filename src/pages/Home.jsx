import { Flex, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Avatars } from './tabsHome/Avatars'
import { Cross } from './tabsHome/Cross'

export const Home = () => (
    <Flex h="100vh" flexDirection="column">
        <Tabs w="100%">
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Avatars />
                </TabPanel>
                <TabPanel>
                    <Cross />
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Flex>
)
