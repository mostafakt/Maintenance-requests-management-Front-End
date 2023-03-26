import moment from "moment";
export type USER_RULE_TYPE = "ADMIN" | "CUSTOMER" | "TECHNICAL";
export enum LOCAL_STORAGE_KEYS {
  ACCESS_TOKEN = "AUTH_ACCESS_TOKEN",
  EXPIRES_IN = "AUTH_EXPIRES_IN",
  USER_TYPE = "USER_RULE_TYPE",
}

export const setToken = (access_token: string | null) => {
  if (access_token == null) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, access_token);
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

export const getToken = (): string => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN) || "";
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  if (!authToken) return false;
  // const tokenExpiration = localStorage.getItem(LOCAL_STORAGE_KEYS.EXPIRES_IN);
  // if (!tokenExpiration) return false;

  // const isTokenStillValid = moment(moment(Date.now()).toString()).isBefore(
  //   moment(tokenExpiration)
  // );

  // return isTokenStillValid;
  return true;
};
