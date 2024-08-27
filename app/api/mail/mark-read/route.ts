import { auth as getSession } from "@/auth";
import { modifyEmail, getGoogleApiHandler } from "@/data/gmail";
import { getRefresh } from "@/actions/auth/account";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user || !user.id) {
      return new Response("Unauthorized", { status: 401 });
    }
    const body = await req.json();
    const { emailId, label, account } = body;
    const res = await getRefresh(user.id, account);
    if (!res || !res.refresh_token) {
      return new Response("Unauthorized", { status: 401 });
    }
    const auth = await getGoogleApiHandler(res.refresh_token);
    const response = await modifyEmail(emailId, auth, label);
    const responseMessage = response ? "Success" : "Failed";
    return new Response(responseMessage, { status: 200 });
  } catch (e) {
    return new Response("Internal Server Error", { status: 500 });
  }
}
