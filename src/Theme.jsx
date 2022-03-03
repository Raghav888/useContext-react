import { useTheme } from "./theme-context";

export const Theme = () => {
  const { changeTheme } = useTheme();
  return <button onClick={changeTheme}>Theme</button>;
};
