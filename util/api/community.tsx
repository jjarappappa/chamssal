import { instance } from "../../instance/instance";
import { communityType } from "../../types/community/communityType";
import { feedType } from "../../types/community/type";
import { communityFeedType } from "../../types/community/FeedType";
import { writeType } from "../../types/community/writeType";
import { commentType } from "../../types/community/commentType";
import {authorization} from "../config/authorization";

export const getCommunity = async (type: feedType): Promise<{feedList: communityType[]}> => {
    return (await instance.get<{feedList: communityType[]}>(`/feed?type=${type}`)).data;
}

export const getFeed = async (id: number): Promise<communityFeedType> => {
    return(await instance.get(`/feed/${id}`)).data;
}

                                    //보내는거            받는거
export const createFeed = async(request: writeType) : Promise<any> => {
    return (await instance.post('/feed', request, authorization())).data
}


export const createComments = async(request: commentType) : Promise<any> => {
    return (await instance.post(`/feed/${id}`, request, authorization())).data
}