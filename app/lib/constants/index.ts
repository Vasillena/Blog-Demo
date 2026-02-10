export const APP_NAME =
  process.env.NEXT_PUBLIC_APP_NAME ||
  "От инвитро до бебе | from-ivf-to-baby.vercel.app";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "Пътят от инвитро процедурата до сбъдването на най-съкровеното желание: да държиш своето бебе в ръце. Тук ще споделям всяка стъпка от това вълнуващо и предизвикателно пътуване – от подготовката и процедурите, през надеждите и трудностите, до онзи специален момент, когато най-накрая всичко си струва.";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

//Sanity
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
