function Button({ name, onClick }) {
  return (
    <button
      className="bor min-w-[56px] rounded-md border-2 border-solid border-slate-950 px-1 py-1 duration-300 hover:bg-slate-950 hover:text-white "
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
