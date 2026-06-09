import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const DB_NAME = "wedding";
const COLLECTION = "wishes";

export async function GET() {
  try {
    const client = await clientPromise;
    const wishes = await client
      .db(DB_NAME)
      .collection(COLLECTION)
      .find({})
      .sort({ timestamp: -1 })
      .toArray();

    return NextResponse.json(
      wishes.map((w) => ({
        id: w._id.toString(),
        name: w.name,
        message: w.message,
        timestamp: w.timestamp,
      })),
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch wishes" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "")
      .trim()
      .slice(0, 80);
    const message = String(body.message ?? "")
      .trim()
      .slice(0, 500);

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 },
      );
    }

    const client = await clientPromise;
    const result = await client
      .db(DB_NAME)
      .collection(COLLECTION)
      .insertOne({ name, message, timestamp: new Date() });

    return NextResponse.json(
      {
        id: result.insertedId.toString(),
        name,
        message,
        timestamp: new Date(),
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json({ error: "Failed to save wish" }, { status: 500 });
  }
}
