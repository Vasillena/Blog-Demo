import MainButton from "@/components/common/MainButton";

export default function NotFound() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl">404</h1>
      <h4 className="text-2xl my-8">
        Страницата, която търсите не съществува!
      </h4>
      <MainButton text={"Начало"} href={"/"} />
    </div>
  );
}
