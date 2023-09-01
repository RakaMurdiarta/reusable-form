type Props = {
  title?: string;
  alamat?: string;
  nomor?: string;
  devide?: boolean;
};

const Headers = ({ alamat, title, nomor }: Props) => {
  return (
    <form>
      <h1 className="text-3xl text-slate-300 font-bold">{title}</h1>
      <h2>{alamat}</h2>
      <h3>{nomor}</h3>
    </form>
  );
};

export default Headers;
