import { YoutubeListResponse } from "../../components/youtube/YoutubeType";
import { instance } from "../../instance/instance";

export const getYoutube = async(): Promise<YoutubeListResponse> => {
    return(await instance.get('/youtube')).data;
}