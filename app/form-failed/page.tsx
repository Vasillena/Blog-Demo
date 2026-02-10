import MainButton from "@/components/common/MainButton";

export default function FormFailedPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl">Oh oh</h1>
      <h4 className="text-2xl my-8">Нещо се обърка, моля, опитайте отново!</h4>
      <MainButton text={"Начало"} href={"/"} />
    </div>
  );
}
