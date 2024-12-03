"use client"

import { useState } from "react"

export default function Page() {
    const [file, setFile] = useState<File | null>(null);
    
    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!file) {
            console.log("No file selected");
            return;
        }

        const data = new FormData();
        data.set('file', file);

        try {
            const res = await fetch('/dev/uploads', {
                method: "POST",
                body: data,
                cache: "no-cache"
            });
            
            if (res.ok) {
                console.log("Upload successful");
                setFile(null)
            } else {
                console.error("Upload failed");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <div style={{ top: '20px', position: 'absolute' }}>
            <form onSubmit={submit}>
                <input 
                    type="file" 
                    name="image" 
                    id="img" 
                    onChange={handleFileChange}
                />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    )
}
