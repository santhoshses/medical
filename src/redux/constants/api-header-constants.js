export const BASE_URL = "https://hmqa.medacecin.in";

export const methodPostHeader = () => {
  return {
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
    "Content-Type": "application/json",
  };
};
export const methodGetHeader = () => {
  return {
    Authorization: "JWT " + localStorage.getItem("AccessToken"),
  };
};