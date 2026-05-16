import { ideasStudioSiteConfig } from "@/lib/ideasStudioConfig";

export async function GET() {
  return Response.json(ideasStudioSiteConfig);
}
