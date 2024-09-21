import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import { Divider } from "@chakra-ui/react";
import TabsContainer from "../../components/Tabs/TabsContainer.tsx";
import CommunityTabDesign from "./CommunityTabDesign/communityTabDesign.tsx";

interface Tab {
  id: number;
  label: string;
}

const intialTabs: Tab[] = [
  { id: 0, label: `Official Forums` },
  { id: 1, label: `Public Forums` },
  { id: 2, label: `Customer Forums` },
];

const Community = () => {
  const [tabList, setTabList] = useState<Tab[]>(intialTabs);
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  useEffect(() => {
    if (intialTabs?.length > 0) {
      setTabList(intialTabs);
      handleTabChange(intialTabs[0]?.id);
    }
  }, []);

  const handleTabChange = (id: number) => {
    console.log(intialTabs?.find((tab) => tab?.id === id));
    const selectedTab = intialTabs?.find((tab) => tab?.id === id);
    setActiveTab(selectedTab || null);
  };

  return (
    activeTab && (
      <div className="max-w-[1540px] w-full mx-auto">
        <div className="flex gap-4">
          <div className="basis-2/3">
            <SearchBox placeholder={`Search`} />
            <TabsContainer
              tabs={tabList}
              data={activeTab}
              TabsDesign={CommunityTabDesign}
              onChange={handleTabChange}
            ></TabsContainer>
          </div>
          <Divider orientation="vertical" />
          <div className="basis-1/3"></div>
        </div>
      </div>
    )
  );
};

export default Community;
