import MenuBody from "@/components/fragments/MenuBody";

export default function Layout({
  children,
  foods,
  drinks,
  sides,
  desserts,
}: {
  children: React.ReactNode;
  foods: React.ReactNode;
  drinks: React.ReactNode;
  sides: React.ReactNode;
  desserts: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full h-full block">
        {children}
        <MenuBody>
          {foods}
          {drinks}
        </MenuBody>
        <MenuBody>
          {sides}
          {desserts}
        </MenuBody>
      </div>
    </>
  );
}
