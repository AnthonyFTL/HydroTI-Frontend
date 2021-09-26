export const changeFilterValue = (value) => ({
  type: "IRRIGATIONS_CHANGE_FILTER_VALUE",
  payload: { data: value },
});

export const irrigationsResetState = () => ({
  type: "IRRIGATIONS_RESET_STATE",
});
