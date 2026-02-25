export interface UserContext {
  userId: string;
  name: string;
  role: "underwriter" | "admin";
  lobs: string[];
  defaultLob: string;
  permissions: string[];
}

export type HeaderProps = {
  userContext: UserContext;
  currentLob: string;
  onLobSwitch: (lob: string) => void;
  onLogout: () => void;
};
