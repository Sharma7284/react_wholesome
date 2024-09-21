import React, { useEffect, useState } from "react";
import TabsContainer from "../../components/Common/Tabs/TabsContainer.tsx";
import { Center, Divider } from "@chakra-ui/react";
import Popular from "../../components/Popular/popular.tsx";
import DashboardTabDesign from "./DashboardTabDesign/dashboardTabDesign.tsx";
import { toast } from "react-toastify";
import apiInstance from "../../core/apiService.ts";
import PeopleToFollow from "../../components/PeopleToFollow/peopleToFollow.tsx";
import Discover from "../../components/Discover/discover.tsx";

const Dashboard = () => {
  const [tabList, setTabList] = useState<any>([{ id: true, label: `For You` }]);
  const [activeTab, setActiveTab] = useState<any>([]);

  useEffect(() => {
    apiInstance.post(`posts/getPostsCategory`, {}).then((res) => {
      if (res.data) {
        setTabList(
          tabList.concat(
            res.data.data.map((m: any) => ({
              id: m?.postCategoryId,
              label: m?.name.replace(`Wellness`, ``),
            }))
          )
        );
        handleTabChange([
          "10219d59-0227-4bbb-b9c6-b12349c9fe61",
          "a498da16-7a01-45f9-963c-7cc362006c0b",
          "a3437d5a-5287-44bb-b36b-703fe47c58c3",
          "787e3b80-1a7f-4669-a4e7-3da45ab18dc3",
        ]);
      }
    });
  }, []);

  const handleTabChange = (id: any) => {
    if (id !== true) {
      setPostData(id);
    } else {
      setPostData([
        "92d75b96-f649-489e-8d11-918f5589159c",
        "beec91ed-27da-4b60-9dd8-076a7c4819c3",
      ]);
    }
  };

  const setPostData = (id: any) => {
    const loading = toast.loading(`Loading...`, {
      isLoading: true,
    });
    apiInstance
      .post(`posts/getPostsByCategory`, { pageNumber: 1, postCategoryId: id })
      .then((res) => {
        toast.update(loading, {
          type: `success`,
          render: `Success`,
          isLoading: false,
          autoClose: 300,
        });
        setActiveTab(res.data.data);
      });
  };

  return (
    <div className="max-w-[1540px] w-full mx-auto my-8 max-sm:mt-0">
      <div className="flex gap-8 max-sm:flex-col">
        <div className="basis-2/3 sm:max-w-[66%]">
          <TabsContainer
            tabs={tabList}
            data={activeTab}
            TabsDesign={DashboardTabDesign}
            onChange={handleTabChange}
            isCenter={false}
          ></TabsContainer>
        </div>
        <Center>
          <Divider orientation="vertical" variant={"solid"} size={""} />
        </Center>
        {/* <Divider orientation="vertical" /> */}
        <div className="basis-1/3">
          <Popular></Popular>
          <Divider className="my-8" />
          <PeopleToFollow />
          <Divider className="my-8" />
          <Discover />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
