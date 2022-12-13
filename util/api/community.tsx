import { instance } from "../../instance/instance";
import { communityType } from "../../types/community/communityType";
import { feedType } from "../../types/community/type";
import { communityFeedType } from "../../types/community/FeedType";

export const getCommunity = async (type: feedType): Promise<{feedList: communityType[]}> => {
    return (await instance.get<{feedList: communityType[]}>(`/feed?type=${type}`)).data;
}

export const getFeed = async (id: number): Promise<communityFeedType> => {
    return(await instance.get(`/feed/${id}`)).data;
}

export const createComments = async (id:number): Promise<communityFeedType> => {
    return (await instance.post(`/feed/${id}/comment`, Comment)).data
}