const MiniCardInfo = ({
  title,
  count,
  loading,
}: {
  title: string;
  count: string | number;
  loading: boolean;
}) => {
  return (
    <div className="w-[11.125rem] h-[3.063rem] bg-[#1E2328] flex items-center px-5 py-4 rounded border border-[#5B5A56] text-golden-1">
      <h2 className="font-spiegel text-base mr-5">
        {loading ? "Cargando" : `${title}:`}
      </h2>
      {!loading && <h1 className="text-3xl font-medium">{count}</h1>}
    </div>
  );
};

export default MiniCardInfo;

