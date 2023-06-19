export default function Loading() {
  return (
    <div className="absolute inset-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-25">
      <svg className="h-10 w-10 animate-spin text-[#4891ef]" viewBox="22 22 44 44">
        <circle
          className="stroke-current"
          style={{ strokeDasharray: "80px,200px" }}
          cx="44"
          cy="44"
          r="20.2"
          fill="none"
          strokeWidth="3.6"
        ></circle>
      </svg>
    </div>
  );
}
