export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <div>{children}</div>
      </div>
    </>
  );
}
