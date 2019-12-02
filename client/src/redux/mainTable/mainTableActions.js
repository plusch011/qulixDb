export const getUsersInfoSuccess = (data) => ({
    type: 'GET_USERS_INFO_SUCCESS',
    payload: data
});

export const getUsersInfoError = (error) => ({
    type: 'GET_USERS_INFO_ERROR',
    payload: error.text
});