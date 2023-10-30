interface TagProps {
  name: string;
}

export const Tag = ({ name }: TagProps) => {
  return (
    <button className=" py-1 bg-zinc-100 rounded-xl  text-xs font-semibold px-2 hover:bg-zinc-200 transition text-zinc-500 hover:text-zinc-600">
      {name}
    </button>
  );
};
