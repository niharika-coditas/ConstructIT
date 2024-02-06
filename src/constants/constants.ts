export const EMAIL_REGEX =
  /^[ ]*(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))[ ]*$/;

export enum ROLE {
  PROJECT_MANAGER = 'PROJECT_MANAGER',
  SUPERVISOR = 'SUPERVISOR',
  TOOL_COORDINATOR = 'TOOL_COORDINATOR'
}
