import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
    const tag = request.nextUrl.searchParams.get("tag"); //mendapatkan parameter tag dari url
    const secret = request.nextUrl.searchParams.get("secret"); //mendapatkan parameter secret dari url
    if (secret !== process.env.NEXT_PUBLIC_REVALIDATE_SECRET) {
        console.log("Invalid secret", process.env.NEXT_PUBLIC_REVALIDATE_SECRET);
        return NextResponse.json({ status: 401, message: "Invalid secret" }, {status: 401});
    }
    if (!tag) {
        return NextResponse.json({ status: 400, message: "Missing tag parameter" }, {status: 400});
    }

    revalidateTag(tag);
    return NextResponse.json({ revalidateTag: true, now: Date.now() });
}