import React, { useEffect, useState } from "react";
import TabsContainer from "../../components/Common/Tabs/TabsContainer.tsx";
import { Center, Divider } from "@chakra-ui/react";
import Popular from "../../components/Popular/popular.tsx";
import DashboardTabDesign from "./DashboardTabDesign/dashboardTabDesign.tsx";
import { toast } from "react-toastify";
import apiInstance from "../../core/apiService.ts";

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
        // handleTabChange(res.data.data[0]?.["postCategoryId"]);
      }
    });
  }, []);

  const handleTabChange = (id: any) => {
    if (id !== true) {
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
    } else {
      setActiveTab([]);
    }
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
