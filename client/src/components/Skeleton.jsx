export default function Skeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="w-full md:w-[450px] 2xl:w-[600px] mx-auto mb-8">
          <div className="px-4 md:px-0 flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="skeleton h-10 w-10 shrink-0 rounded-full"></div>
              <div className="skeleton h-5 w-20"></div>
            </div>
            <div className="skeleton h-2 w-6"></div>
          </div>
          <div className="mt-2 skeleton h-[550px] w-full md:rounded-md"></div>
        </div>
      ))}
    </>
  );
}
