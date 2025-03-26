import { IBillboard } from "@/type";

export const getBillboard = async (billboardId: string): Promise<IBillboard | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/billboard/${billboardId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: IBillboard = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
