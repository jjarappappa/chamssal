import { NextRouter } from "next/router";
import { instance } from "../../instance/instance";
import { lectureType } from "../../types/lecture/lectureType";
import { authorization } from "../config/authorization";

export const getLectureList = async () => {
  return await instance.get("/lecture");
};

export const getLectureDetail = async (
  router: NextRouter,
  id: string | string[] | undefined
) => {
  if (router.isReady) {
    return await instance.get(`/lecture/${id}`);
  }
};

export const applyLecture = async (id: string) => {
  return await instance.post(`/lecture/${id}/apply`, null, authorization());
};

export const getLectureApplicantList = async (id: string) => {
  return await instance.get(`/lecture/${id}/apply`);
};
