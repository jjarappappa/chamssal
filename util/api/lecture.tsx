import { NextRouter } from "next/router";
import { instance } from "../../instance/instance";
import { lectureType } from "../../types/lecture/lectureType";
import { authorization } from "../config/authorization";

export const getLectureList = async () => {
  return await instance.get("/lecture");
};

export const getLectureDetail = async (id: string | string[] | undefined) => {
  return await instance.get(`/lecture/${id}`);
};

export const getLectureApplicantList = async (
  id: string | string[] | undefined
) => {
  return await instance.get(`/lecture/${id}/apply`);
};

export const applyLecture = async (id: string) => {
  return await instance.post(`/lecture/${id}/apply`, null, authorization());
};

export const cancelLecture = async (id: string) => {
  return await instance.delete(`/lecture/${id}/apply`, authorization());
};
