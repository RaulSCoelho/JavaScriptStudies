export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex gap-4">
        <a href="/protected/client" className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
          Protected Client
        </a>
        <a href="/protected/server" className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-600">
          Protected Server
        </a>
      </div>
    </div>
  )
}
