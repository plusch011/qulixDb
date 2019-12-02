export const getProfileInfoSuccess = (data) => ({
    type: 'GET_PROFILE_INFO_SUCCESS',
    payload: data
});

export const getProfileInfoError = (error) => ({
    type: 'GET_PROFILE_INFO_ERROR',
    payload: error.text
});