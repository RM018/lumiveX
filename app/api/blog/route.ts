import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'blog.json');

export async function GET() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const posts = JSON.parse(raw) as { id: number }[];
    return NextResponse.json(posts);
  } catch (err) {
    console.error('GET /api/blog error', err);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const raw = await fs.readFile(DATA_PATH, 'utf-8');
    const posts = JSON.parse(raw) as { id: number }[];
    const nextId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;
    const newPost = { id: nextId, ...body };
    posts.unshift(newPost);
    await fs.writeFile(DATA_PATH, JSON.stringify(posts, null, 2), 'utf-8');
    return NextResponse.json(newPost, { status: 201 });
  } catch (err) {
    console.error('POST /api/blog error', err);
    return NextResponse.json({ error: 'Unable to save post' }, { status: 500 });
  }
}
