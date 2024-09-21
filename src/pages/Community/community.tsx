import React, { useEffect, useState } from "react";
import SearchBox from "../../components/Common/SearchBox/SearchBox.tsx";
import Popular from "../../components/Popular/popular.tsx";
import TabsContainer from "../../components/Common/Tabs/TabsContainer.tsx";
import CommunityTabDesign from "./CommunityTabDesign/communityTabDesign.tsx";
import CommunityConversation from "./CommunityConversation/communityConversation.tsx";
import apiInstance from "../../core/apiService.ts";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Center, Divider } from "@chakra-ui/react";
import PeopleToFollow from "../../components/PeopleToFollow/peopleToFollow.tsx";

const Community = () => {
  const [tabList, setTabList] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<any>([]);

  const navigate = useNavigate();
  const location = useLocation();
  const lastPathSegment = location.pathname
    .substring(location.pathname.lastIndexOf("/") + 1)
    .replace(/%20/g, ` `);
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get(`id`);

  useEffect(() => {
    if (!id) {
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
    }
    // if (id) {
    //   // apiInstance.post(`community/getCommunities`, { id }).then((res) => {
    //     // console.log({ res: res.data.data });
    //     // setCommunityData(res.data.data);
    //     // });
    //     setCommunityId(id)
    // }
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
            {!id && (
              <>
                <SearchBox placeholder={`Search Community`} />
                <TabsContainer
                  tabs={tabList}
                  data={activeTab}
                  TabsDesign={CommunityTabDesign}
                  onChange={handleTabChange}
                  isCenter={true}
                ></TabsContainer>
              </>
            )}
            {id && (
              <div className="flex flex-col gap-4">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate(`/community`)}>
                      Community
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <BreadcrumbLink>{lastPathSegment}</BreadcrumbLink>
                  </BreadcrumbItem>
                </Breadcrumb>
                {<CommunityConversation />}
              </div>
            )}
          </div>
          <Center>
            <Divider orientation="vertical" variant={"solid"} size={""} />
          </Center>
          <div className="basis-1/3">
            <Popular></Popular>
            <Divider className="my-8"></Divider>
            <PeopleToFollow />
          </div>
        </div>
      </div>
    )
  );
};

export default Community;
