type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="mx-[70px]">{children}</div>;
};

export default Container;
