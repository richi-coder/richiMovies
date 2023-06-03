import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path') || '';
  console.log(path, 'revalidatin...');
  revalidatePath(`/${path}`);
  return NextResponse.json({ revalidated: true, now: Date.now(), path_revalidated: `/${path}` });
}