import { Header } from '@modules/header';

interface MainLayoutPropsI {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutPropsI> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
