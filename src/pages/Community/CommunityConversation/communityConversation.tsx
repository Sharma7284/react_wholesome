import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import DUMMYIMG from "../../../assets/images/dummy_img.jpg";
import apiInstance from "../../../core/apiService.ts";
import { useLocation } from "react-router-dom";
import { Formik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const CommunityConversation = () => {
  const [communityData, setCommunityData] = useState<any>([]);
  const [commentsData, setCommentsData] = useState<any>([]);
  const { colorMode } = useColorMode();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    apiInstance
      .post(`community/getCommunities`, { id: queryParams.get(`id`) })
      .then((res) => {
        setCommunityData(res.data.data);
      });
    apiInstance
      .post(`community/getComments`, {
        communityId: queryParams.get(`id`),
      })
      .then((res) => {
        console.table(res.data.data.map((m) => ({ isReply: false, ...m })));
        setCommentsData(res.data.data.map((m) => ({ isReply: false, ...m })));
      });
  }, [location]);

  const handleReplyClick = (id: any) => {
    const updateComments = commentsData.map((ele: any) => {
      return ele.id === id
        ? { ...ele, isReply: !ele.isReply }
        : { ...ele, isReply: false };
    });
    setCommentsData(updateComments);
  };

  const handleReplyCancel = () => {
    const updateComments = commentsData.map((ele: any) => {
      return { ...ele, isReply: false };
    });
    setCommentsData(updateComments);
  };

  const handleReplyRepliesCancel = () => {
    const updateComments = commentsData.map((ele: any) => {
      return {
        ...ele,
        replies: ele.replies?.map((el: any) => {
          return { ...el, isReply: false };
        }),
      };
    });
    setCommentsData(updateComments);
  };

  const handleReplyRepliesClick = (id: any) => {
    console.log(commentsData);
    const updateComments = commentsData.map((ele: any) => {
      return {
        ...ele,
        replies: ele.replies.map((el) => {
          return el.id === id
            ? { ...el, isReply: !el.isReply }
            : { ...el, isReply: false };
        }),
      };
    });

    setCommentsData(updateComments);
  };

  const handleGetRepliesComments = (id: any) => {
    apiInstance
      .post(`community/getCommentsReplies`, { parentCommentId: id })
      .then((res) => {
        const updateReplies = commentsData.map((m) => {
          return m?.id === id
            ? {
                ...m,
                replies: res.data.data.map((m) => ({ ...m, isReply: false })),
              }
            : { ...m, replies: [] };
        });
        console.table(updateReplies);
        setCommentsData(updateReplies);
        // setCommentsReplyData(res.data.data);
      });
  };

  return (
    <div className="flex flex-col gap-8">
      {communityData && (
        <div className="border-2 rounded-2xl overflow-hidden">
          <Image
            src={communityData?.imageUrl || DUMMYIMG}
            className="w-full h-[450px] object-cover rounded-lg border"
          ></Image>
        </div>
      )}
      {communityData && (
        <div
          className={`${
            colorMode === "light" && `bg-[#f3f4f6]`
          } border   rounded-lg p-4 flex justify-between`}
        >
          {commentsData.title}
          <div className="flex">
            <Text fontSize={`xl`} className="text-start font-bold">
              {communityData.title}
            </Text>
          </div>
          <div className="">
            <Text fontSize={`lg`} className="text-center font-bold">
              {communityData?.messages?.value}
              {communityData?.messages?.unit}
            </Text>
            <Text fontSize={`lg`} className="text-start">
              Message
            </Text>
          </div>
        </div>
      )}
      <Divider></Divider>
      <div>
        <Formik
          initialValues={{ message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.message) {
              errors[`message`] = `Required`;
            }
          }}
          onSubmit={() => {}}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="flex ">
              <div className="flex w-full items-center gap-4">
                <FormControl isInvalid={!!errors?.message}>
                  <Input
                    type="text"
                    name="message"
                    placeholder="Type comment..."
                  />
                  {errors.message && touched.message && (
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  )}
                </FormControl>
                <Button type="submit" disabled={isSubmitting}>
                  Comment
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Divider></Divider>
      <div className="flex flex-col gap-2">
        {commentsData &&
          commentsData.map((m: any, i: any) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 border-2 rounded-full overflow-hidden flex items-center justify-center my-2">
                {m?.userId?.photoUrl ? (
                  <Image
                    src={m?.userId?.photoUrl || DUMMYIMG}
                    className="w-full h-full object-cover "
                  ></Image>
                ) : (
                  <Text fontSize={`xl`} className="font-bold">
                    {m?.userId?.name.charAt(0)}
                  </Text>
                )}
              </div>
              <div
                className={`flex-1 flex flex-col gap-2 p-4 rounded-lg ${
                  colorMode === "light" && ``
                }`}
              >
                <div className="flex items-center gap-2">
                  <Text className="font-bold">{m?.comment}</Text>
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                </div>
                <div>
                  <Text>{m?.comment}</Text>
                </div>
                <div className="flex gap-4">
                  <Button
                    className="border"
                    onClick={() => handleReplyClick(m?.id)}
                  >
                    Reply
                  </Button>
                  <Button
                    className="border"
                    onClick={() => handleGetRepliesComments(m?.id)}
                  >
                    <span className=""></span>
                    <span className="">Replies</span>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="ml-1"
                    ></FontAwesomeIcon>
                  </Button>
                </div>
                {m?.isReply && (
                  <div>
                    <Formik
                      initialValues={{ message: "" }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.message) {
                          errors[`message`] = `Required`;
                        }
                      }}
                      onSubmit={() => {}}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit} className="flex ">
                          <div className="flex w-full items-center gap-4">
                            <FormControl isInvalid={!!errors?.message}>
                              <Input
                                type="text"
                                name="message"
                                placeholder="Type comment..."
                              />
                              {errors.message && touched.message && (
                                <FormErrorMessage>
                                  {errors.message}
                                </FormErrorMessage>
                              )}
                            </FormControl>
                            <Button type="button" onClick={handleReplyCancel}>
                              Cancel
                            </Button>
                            <Button type="submit" disabled={isSubmitting}>
                              Reply
                            </Button>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                )}
                {m.replies?.length > 0 &&
                  m.replies.map((m: any, i: any) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 border-2 rounded-full overflow-hidden flex items-center justify-center my-2">
                        {m?.userId?.photoUrl ? (
                          <Image
                            src={m?.userId?.photoUrl || DUMMYIMG}
                            className="w-full h-full object-cover "
                          ></Image>
                        ) : (
                          <Text fontSize={`xl`} className="font-bold">
                            {m?.userId?.name.charAt(0)}
                          </Text>
                        )}
                      </div>
                      <div
                        className={`flex-1 flex flex-col gap-2 p-4 rounded-lg ${
                          colorMode === "light" && ``
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Text className="font-bold">{m?.comment}</Text>
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        </div>
                        <div>
                          <Text>{m?.comment}</Text>
                        </div>
                        <div className="flex gap-4">
                          <Button
                            className="border"
                            onClick={() => handleReplyRepliesClick(m?.id)}
                          >
                            Reply
                          </Button>
                        </div>
                        {m?.isReply && (
                          <div>
                            <Formik
                              initialValues={{ message: "" }}
                              validate={(values) => {
                                const errors = {};
                                if (!values.message) {
                                  errors[`message`] = `Required`;
                                }
                              }}
                              onSubmit={() => {}}
                            >
                              {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                              }) => (
                                <form onSubmit={handleSubmit} className="flex ">
                                  <div className="flex w-full items-center gap-4">
                                    <FormControl isInvalid={!!errors?.message}>
                                      <Input
                                        type="text"
                                        name="message"
                                        placeholder="Type comment..."
                                      />
                                      {errors.message && touched.message && (
                                        <FormErrorMessage>
                                          {errors.message}
                                        </FormErrorMessage>
                                      )}
                                    </FormControl>
                                    <Button
                                      type="button"
                                      onClick={handleReplyRepliesCancel}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      type="submit"
                                      disabled={isSubmitting}
                                    >
                                      Reply
                                    </Button>
                                  </div>
                                </form>
                              )}
                            </Formik>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommunityConversation;
