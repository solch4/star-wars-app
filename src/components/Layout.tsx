import Header from "./Header";

interface Props {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="layout container">{children}</main>
    </>
  );
};

export default Layout;
