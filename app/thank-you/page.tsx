import MainButton from "@/components/common/MainButton";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl">Thank you!</h1>
      <h4 className="text-2xl my-8">
        Вашето съобщение беше изпратено успешно. Ще се свържа с Вас при първа
        възможност =)
      </h4>
      <MainButton text={"Начало"} href={"/"} />
    </div>
  );
}
