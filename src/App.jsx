import "./styles/normalize.css";
import "./styles/App.css";
import AppRoutes from "./router/AppRoutes.jsx";
import { useEffect } from "react";
import useTheme from "./hooks/useTheme.js";
import useTg from "./hooks/useTg.js";

const App = () => {
  const { tg } = useTg();
  const { checkThemeAndSetProperties } = useTheme();

  const handleThemeChange = () => {
    checkThemeAndSetProperties();
    tg.MainButton.setParams({
      color: document.documentElement.style.getPropertyValue("--accent-color"),
    });
  };

  const initialSetTheme = () => {
    checkThemeAndSetProperties();
  };

  // 123

  useEffect(() => {
    tg.onEvent("themeChanged", handleThemeChange);

    initialSetTheme();
    // console.log(tg.CloudStorage.setItem('key', 'value'))
    // console.log(tg.CloudStorage.getItem('key'))

    return () => {
      tg.offEvent("themeChanged", handleThemeChange);
    };
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};
export default App;
