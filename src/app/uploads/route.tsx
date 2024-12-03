import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import chalk from "chalk";

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    console.log(chalk.inverse.red("Processing upload request"));
    
    const file: File | null = data.get('file') as unknown as File;
    
    if (!file) {
      return NextResponse.json({ error: 'File not found' }, { status: 400 });
    }

    // Check if file is an image
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
      return NextResponse.json({ error: 'File is not an image' }, { status: 400 });
    }

    // Check if file size is less than 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size exceeds 5MB' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Generate a unique name for the file to handle concurrent uploads
    const uniqueName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}-${file.name}`;
    const path = `./public/${uniqueName}`;
    await writeFile(path, buffer);
    
    // Return the URL to access the image
    const imageUrl = `${process.env.BASE_URL}/public/${uniqueName}`;
    return NextResponse.json({ msg: "File Uploaded Successfully", url: imageUrl }, { status: 201 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
