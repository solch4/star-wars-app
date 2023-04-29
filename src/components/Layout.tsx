import Header from "./Header";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="layout">{children}</main>
    </>
  );
};

export default Layout;
