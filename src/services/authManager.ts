import moment from "moment";
export type USER_RULE_TYPE = "ADMIN" | "CLIENT" | "TECHNICAL";
export enum LOCAL_STORAGE_KEYS {
  ACCESS_TOKEN = "AUTH_ACCESS_TOKEN",
  EXPIRES_IN = "AUTH_EXPIRES_IN",
  USER_TYPE = "USER_RULE_TYPE",
  USER_ID = "USER_ID",
}

export const setToken = (access_token: string | null) => {
  if (access_token == null) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, access_token);
};

export const setUser = (user: string | null) => {
  if (user == null) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ID);
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.USER_ID, user);
};
export const setRule = (rule: USER_RULE_TYPE | null) => {
  if (rule == null) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_TYPE);
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.USER_TYPE, rule);
};
export const getRule = (): USER_RULE_TYPE | string => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.USER_TYPE) || "";
};
export const setExpiresIn = (expires_in: string | null) => {
  if (expires_in == null) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.EXPIRES_IN);
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.EXPIRES_IN, expires_in);
};

export const getExpiresIn = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.EXPIRES_IN);
};
export const getUser = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.USER_ID);
};

export const getToken = (): string => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) || "";
};
export const getHeader = (image?: boolean) => {
  if (image)
    return {
      Authorization: "Bearer " + getToken(),
      "Content-Type": "multipart/form-datan",
    };

  return {
    Authorization: "Bearer " + getToken(),
    "Content-Type": "application/json",
  };
};
export const isLoggedIn = () => {
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  if (!authToken) return false;
  // const tokenExpiration = localStorage.getItem(LOCAL_STORAGE_KEYS.EXPIRES_IN);
  // if (!tokenExpiration) return false;
  // const isTokenStillValid = moment(moment(Date.now()).toString()).isBefore(
  //   moment(tokenExpiration)
  // );
  // const sss = Number(Date.now()) + Number(tokenExpiration);
  // console.log(tokenExpiration);

  // return isTokenStillValid;
  return true;
};
