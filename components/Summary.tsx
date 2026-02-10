import { PortableText } from "@portabletext/react";
import { Summary as SummaryType } from "@/app/types";
import { dancePartner } from "@/app/lib/fonts";
import { getSummary } from "@/app/lib/actions/home.action";

export default async function Summary() {
  const summaryText: SummaryType | null = await getSummary();

  const expenses = summaryText.expenses ?? [];

  const totalPrice = expenses.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="max-w-7xl mx-auto">
      <div className="px-6 md:px-24 py-24 border-x border-b border-[#222927] text-xl md:text-2xl">
        <h2
          className={`text-5xl md:text-6xl text-center mb-12 ${dancePartner.className}`}
        >
          {summaryText.title}
        </h2>
        <div className="indent-8">
          {summaryText.body1 && <PortableText value={summaryText.body1} />}
        </div>
        <div className="container mx-auto sm:px-4 py-4">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Price</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item) => (
                <tr key={item._key} className="border-b">
                  <td className="px-4 py-2">{item.description}</td>
                  <td className="px-4 py-2">{item.price.toFixed(2)}</td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-2 font-bold">Total</td>
                <td className="px-4 py-2 font-bold">{totalPrice.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="indent-8">
          {summaryText.body2 && <PortableText value={summaryText.body2} />}
        </div>
      </div>
    </section>
  );
}
