const Footer = () => {
  const clickHandler = () => {
    window.open("https://github.com/KajetanWarmbier", "_blank");
  };

  return (
    <div className="flex">
      <div className="flex m-auto items-center text-textFooter justify-around w-[9rem] mb-[2rem] text-[1rem] md:mt-[3rem] 2xl:mt-[5rem]">
        <h1
          className="cursor-pointer text-textFooter hover:text-black transition ease-in-out duration-500"
          onClick={clickHandler}
        >
          Autor
        </h1>
        {/* <h1>|</h1>
        <h1 className="text-textFooter hover:text-black cursor-pointer transition ease-in-out duration-500">
          Grupy
        </h1> */}
      </div>
    </div>
  );
};

export default Footer;
