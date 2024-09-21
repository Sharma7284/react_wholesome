import React, { useEffect, useState } from "react";
import SearchBox from "../../components/Common/SearchBox/SearchBox.tsx";
import { Center, Divider } from "@chakra-ui/react";
import TabsContainer from "../../components/Common/Tabs/TabsContainer.tsx";
import CommunityTabDesign from "./CommunityTabDesign/communityTabDesign.tsx";
import apiInstance from "../../core/apiService.ts";
import { toast } from "react-toastify";
import Popular from "../../components/Popular/popular.tsx";
import { useLocation } from "react-router-dom";

const Community = () => {
  const [tabList, setTabList] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<any>([]);

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname.replace(/%20/g, ` `));
    apiInstance.post(`community/getCommunitiesCategory`, {}).then((res) => {
      if (res.data) {
        setTabList(
          res.data.data.map((m: any) => ({
            id: m?.id,
            label: m?.title,
          }))
        );
        handleTabChange(res.data.data[0]?.["id"]);
      }
    });
  }, [location]);

  const handleTabChange = (id: any) => {
    const loading = toast.loading(`Loading...`, {
      isLoading: true,
    });
    apiInstance
      .post(`community/getCommunitiesByCategory`, { id })
      .then((res) => {
        toast.update(loading, {
          type: `success`,
          render: `Success`,
          isLoading: false,
          autoClose: 1000,
        });
        setActiveTab(res.data.data);
      });
  };

  return (
    activeTab && (
      <div className="max-w-[1540px] w-full mx-auto my-8">
        <div className="flex gap-8 max-sm:flex-col">
          <div className="basis-2/3">
            <SearchBox placeholder={`Search Community`} />
            <TabsContainer
              tabs={tabList}
              data={activeTab}
              TabsDesign={CommunityTabDesign}
              onChange={handleTabChange}
              isCenter={true}
            ></TabsContainer>
          </div>
          <Center>
            <Divider orientation="vertical" variant={"solid"} size={""} />
          </Center>
          <div className="basis-1/3">
            <Popular></Popular>
          </div>
        </div>
      </div>
    )
  );
};

export default Community;
