import { IMenuSection, Positions } from "../interfaces";
export const menuItems: IMenuSection = {
  Admin: {
    position: Positions.Top,
    items: [
      {
        text: "Dashboard",
        icon: "Dashboard",
      },
      {
        text: "Settings",
        icon: "SettingFill",
      },
      {
        text: "All activity",
        icon: "Activity",
      },
      {
        text: "---",
      },
    ],
  },
};
