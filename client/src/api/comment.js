import axiosInstance from "../utils/axiosInstance";

// this file is handling comment-related features, just like the auth.js file handled user features.

export const createComment = async (postId, comment, accessToken) => {
  return await axiosInstance.post(`/comments/create/${postId}`, comment, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getComments = async (postId, accessToken) => {
  return await axiosInstance.get(`/comments/get/${postId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const deleteComment = async (commentId, accessToken) => {
  return await axiosInstance.delete(`/comments/delete/${commentId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const likeComment = async (commentId, accessToken) => {
  return await axiosInstance.patch(
    `/comments/like/${commentId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
