import { instance } from "../../instance/instance";
import { communityType } from "../../types/community/communityType";
import { feedType } from "../../types/community/type";

export const getCommunity = async (type: feedType): Promise<{feedList: communityType[]}> => {
    return (await instance.get<{feedList: communityType[]}>(`/feed?type=${type}`)).data;
}