import MainButton from "@/components/common/MainButton";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center">
      <h1 className="text-9xl">Thank you!</h1>
      <h4 className="text-2xl my-8">
        Your message has been sent successfully. I will contact you as soon as
        possible =)
      </h4>
      <MainButton text={"Home"} href={"/"} />
    </div>
  );
}
