export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>Header Admin</nav>
        {children}
        <footer>Footer Admin</footer>
      </body>
    </html>
  );
}
