export default function Layout(props) {
  return (
    <div className="flex flex-col w-full ">
      <main className=" mx-auto w-full ">{props.children}</main>
    </div>
  );
}
