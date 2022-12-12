import { instance } from "../../instance/instance";
import { communityType } from "../../types/community/communityType";

export const getCommunity = async (): Promise<communityType> => {
    const response = await instance.get<communityType>("/youtube");
    console.log(response);
    return response.data;
}