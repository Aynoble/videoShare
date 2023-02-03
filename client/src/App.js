import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { darkTheme, lightTheme } from "./utils/Themes";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Video from "./pages/Video";

function App() {
  const Container = styled.div`
    display: flex;
  `;
  const Main = styled.div`
    flex: 7;
    background-color: ${({ theme }) => theme.bg};
  `;
  const Wrapper = styled.div`
    padding: 22px 96px;
  `;

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode")
      ? JSON.parse(localStorage.getItem("darkMode"))
      : true
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const Layout = () => {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Outlet />
            </Wrapper>
          </Main>
        </Container>
      </ThemeProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "video/:id",
          element: <Video />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
