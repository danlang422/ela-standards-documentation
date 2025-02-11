export const metadata = {
  title: 'ELA Standards Documentation',
  description: 'Interactive documentation system for ELA standards',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}