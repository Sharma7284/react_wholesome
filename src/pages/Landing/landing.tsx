import React, { useEffect, useState } from "react";
import TabsContainer from "../../components/Tabs/TabsContainer.tsx";
import { Button, Divider } from "@chakra-ui/react";
import TabContainerDesign from "./TabContainerDesign/tabContainerDesign.tsx";
import apiInstance from "../../core/apiService.ts";
import POST_01 from "../../assets/images/post_01.png";
import POST_02 from "../../assets/images/post_02.png";
import POST_03 from "../../assets/images/post_03.png";
import POST_04 from "../../assets/images/post_04.png";
import MOBILE from "../../assets/images/mobile.webp";
import { useColorMode } from "@chakra-ui/react";
import Hero from "./Hero/hero.tsx";

const Landing = () => {
  const { colorMode } = useColorMode();
  const [tabsList, setTabsList] = useState([]);
  const [tabContent, setTabContent] = useState([]);

  const postData = [
    {
      postUrl: POST_01,
      title: `Discover Our Wellness Journey`,
      created_at: `13 June 2023`,
    },
    {
      postUrl: POST_02,
      title: `Discover Our Wellness Journey`,
      created_at: `13 June 2023`,
    },
    {
      postUrl: POST_03,
      title: `Discover Our Wellness Journey`,
      created_at: `13 June 2023`,
    },
    {
      postUrl: POST_04,
      title: `Discover Our Wellness Journey`,
      created_at: `13 June 2023`,
    },
  ];

  useEffect(() => {
    apiInstance.post(`/posts/getPostsCategory`, {}).then((res) => {
      if (res.data) {
        setTabsList(
          res.data.data.map((m: any) => ({
            id: m?.postCategoryId,
            label: m?.name?.replace(`Wellness`, ``),
          }))
        );
      }
    });
  }, []);

  const onChangeTab = (id: any) => {
    handleTabData(id);
  };

  useEffect(() => {
    handleTabData(tabsList?.[0]?.["postCategoryId"]);
  }, [tabsList]);

  const handleTabData = (id: any) => {
    apiInstance
      .post(`/posts/getPostsByCategory`, {
        pageNumber: 1,
        postCategoryId: id,
      })
      .then((res) => {
        if (res.data) {
          setTabContent(res.data.data);
        }
      });
  };

  return (
    <div className="max-w-[1540px] mx-auto">
      <Hero />
      {tabsList.length > 0 && (
        <TabsContainer
          data={tabContent}
          tabs={tabsList}
          TabsDesign={TabContainerDesign}
          onChange={onChangeTab}
        ></TabsContainer>
      )}
      <Divider className="max-w-[1540px] mx-auto" />
      <div className="mt-8 mb-16">
        <div className="flex justify-between mb-8">
          <p className="text-4xl font-bold">Healthy Eating</p>
          <Button className="bg-black text-white">View all</Button>
        </div>
        <div className="grid grid-cols-4 gap-8 ">
          {postData.map((m, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <div>
                <img className="w-full rounded-2xl" src={m?.postUrl} alt="" />
              </div>
              <div>
                <p className="font-bold text-sm">Health Focus</p>
              </div>
              <div>
                <p className="font-bold text-xl">{m?.title}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-sm">HEALTHY LIVIG</p>
                <p className="font-bold text-sm">{m?.created_at}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 mb-16">
        <div className="flex justify-between mb-8">
          <p className="text-4xl font-bold">Wellness Editor's Picks</p>
        </div>
        <div className="grid grid-cols-3 gap-8 ">
          {postData.slice(0, 3).map((m, i) => (
            <div className="flex flex-col gap-2" key={i}>
              <div className="flex items-end gap-4">
                <div className="text-8xl">{i + 1}</div>
                <img className="w-full rounded-2xl" src={m?.postUrl} alt="" />
              </div>
              <div>
                <p className="font-bold text-md">Health Focus</p>
              </div>
              <div>
                <p className="font-bold text-xl">{m?.title}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-sm">HEALTHY LIVIG</p>
                <p className="font-bold text-sm">{m?.created_at}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 mb-16">
        <div className="rounded-lg border border-black bg-[#fae8d3] flex p-12">
          <div className="basis-3/5">
            <img src={MOBILE} alt="" />
          </div>
          <div className="basis-2/5">
            <p
              className={`text-lg mb-4 ${colorMode === `dark` && "text-black"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
              odio maximus, congue felis sed, viverra mauris. Praesent luctus
              cursus risus porttitor bibendum. Proin ac ante ac lorem rutrum
              lacinia. Phasellus semper diam eget congue facilisis.
            </p>
            <Button className="bg-[#135947] text-white">Call to action</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
