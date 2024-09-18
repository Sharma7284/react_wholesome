import { Tabs, Tab, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import React from "react";

const TabsContainer = ({ data, tabs, TabsDesign, onChange }: any) => {
  const onChangeTab = (id: any) => {
    onChange(id);
  };

  return (
    <>
      {tabs.length > 0 && (
        <div className="flex justify-between items-center max-w-[1540px] mx-auto py-4">
          <Tabs isLazy align="center" variant="soft-rounded" className="w-full">
            <TabList className="gap-2">
              {tabs?.map((m: any, i: any) => (
                <Tab
                  onClick={() => onChangeTab(m?.id)}
                  _selected={{
                    color: `white`,
                    bg: `#135947`,
                  }}
                  _hover={{
                    color: `white`,
                    bg: `#135947`,
                  }}
                  key={i}
                >
                  {m?.label}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {data?.map((m: any, i: any) => (
                <TabPanel key={i}>
                  <TabsDesign data={data}></TabsDesign>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default TabsContainer;
