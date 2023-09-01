import Headers from "../components/Form/Headers";

type IForm = {
  divide?: boolean;
};

const Form = ({ divide = false }: IForm) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="dark:text-white w-1/2 h-1/2 text-center grid">
        <div className={`flex justify-center items-center border-x border-t gap-2`}>
          <div className="flex justify-center items-center w-32">
            LOGO
          </div>
          <div className={`${divide && "w-[0.2px] h-full bg-slate-300"} text-red-500`}></div>
          <div className="flex justify-start flex-grow px-3">
            <Headers
              title="Rs Jaya Sehat"
              nomor="0321-8899669"
              alamat="jalan"
            />
          </div>
        </div>
        <div className="border h-[200px]">

        </div>
      </div>
    </div>
  );
};

export default Form;
