import { YoutubeListResponse } from "../../components/youtube/YoutubeType";
import { instance } from "../../instance/instance";
import {authorization} from "../config/authorization";
import {CreateYoutubeRequest} from "../../types/youtube/CreateYoutubeRequest";

export const getYoutube = async(): Promise<YoutubeListResponse> => {
    return(await instance.get('/youtube')).data;
}

export const createYoutube = async (request: CreateYoutubeRequest) => {
    return (await instance.post('/youtube', request, authorization())).data;
}
