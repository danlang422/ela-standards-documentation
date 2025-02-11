'use client';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold">Debug Information</h2>
      <p className="mt-4">Current path: {window.location.pathname}</p>
      <p className="mt-2">Base path: {process.env.NEXT_PUBLIC_BASE_PATH || 'Not set'}</p>
      <div className="mt-4 p-4 bg-gray-100 rounded">
        <pre>{JSON.stringify(process.env, null, 2)}</pre>
      </div>
    </div>
  )
}