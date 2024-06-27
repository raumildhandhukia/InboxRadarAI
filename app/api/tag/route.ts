import { auth } from "@/auth";
import { db } from "@/lib/db";
import { TagSchema } from "@/schemas";
import { PLANS } from "@/config/app";

export interface Label {
  id: string;
  label: string;
  description: string;
  color: string;
  predefinedId?: number;
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tags }: { tags: Label[] } = body;
    const session = await auth();
    const user = session?.user;
    if (!user || !user.id) {
      return new Response("Unauthorized", {
        status: 401,
      });
    }
    const selectedPlan = PLANS.find((p) => p.plan === user.plan);
    if (!selectedPlan) {
      return new Response("Subscription not found", {
        status: 401,
      });
    }
    const customTags = tags.filter((tag) => !tag.predefinedId);
    const predefinedTags = tags.filter((tag) => tag.predefinedId);

    if (customTags.length > selectedPlan.customTag) {
      return new Response("Custom Tag Limit Exceeded", {
        status: 400,
      });
    }
    if (tags.length > selectedPlan.totalTags) {
      return new Response("Total Tag Limit Exceeded", {
        status: 400,
      });
    }
    const userId: string = user.id;

    let isValid = true;
    const data = tags.map((tag) => {
      const result = TagSchema.safeParse({
        label: tag.label,
        description: tag.description,
      });
      if (!result.success) {
        isValid = false;
      }
      return {
        label: tag.label,
        predefinedId: tag.predefinedId,
        description: tag.description,
        color: tag.color,
        userId,
      };
    });
    if (!isValid) {
      return new Response("Invalid", {
        status: 400,
      });
    }
    await db.tag.deleteMany({
      where: {
        userId,
      },
    });

    await db.tag.createMany({
      data,
    });

    return new Response("Created", {
      status: 201,
    });
  } catch (error) {
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
