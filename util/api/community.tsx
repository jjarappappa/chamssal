import { instance } from "../../instance/instance";
import { communityType } from "../../types/community/communityType";
import { feedType } from "../../types/community/type";
import { communityFeedType } from "../../types/community/FeedType";

export const getCommunity = async (
  type: feedType
): Promise<{ feedList: communityType[] }> => {
  return (
    await instance.get<{ feedList: communityType[] }>(`/feed?type=${type}`)
  ).data;
};

export const getFeed = async (
  id: string | string[] | undefined
): Promise<communityFeedType> => {
  return (await instance.get(`/feed/${id}`)).data;
};
