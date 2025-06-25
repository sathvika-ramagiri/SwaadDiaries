import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

// API GET Handler
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const state = searchParams.get('state');

        if (!state) {
            return NextResponse.json({ error: 'State not provided' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'src', 'app', 'api', 'data', `${state}.json`);
        const fileData = fs.readFileSync(filePath, 'utf8');
        const jsonData = JSON.parse(fileData);

        return NextResponse.json(jsonData);
    } catch (error) {
        console.error('Error loading data:', error);
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
    }
}
