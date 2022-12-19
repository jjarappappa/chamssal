import { YoutubeType } from "../../components/youtube/YoutubeType";
import { instance } from "../../instance/instance";

export const getYoutube = async(): Promise<YoutubeType> => {
    return(await instance.get('/youtube')).data;
}