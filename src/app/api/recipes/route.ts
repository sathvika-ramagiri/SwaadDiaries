import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const state = searchParams.get('state');

        if (!state) {
            return NextResponse.json({ error: 'State not provided' }, { status: 400 });
        }

        const filePath = path.join(process.cwd(), 'src', 'app', 'api', 'data', 'allRecipes.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const allRecipes = JSON.parse(fileData);

        // Filter recipes by stateId
        const filtered = allRecipes.filter((recipe: any) => recipe.stateId === state);

        return NextResponse.json(filtered);
    } catch (error) {
        console.error('Error loading data:', error);
        return NextResponse.json({ error: 'Failed to load data' }, { status: 500 });
    }
}