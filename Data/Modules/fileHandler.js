import fs from 'fs/promises';


export async function readJSONFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`File not found: ${filePath}. Creating a new one.`);
            return [];
        } else {
            throw error;
        }
    }
}

export async function saveJSONFile(filePath, data) {
    try {
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
        console.log(`Data successfully written to ${filePath}`);
    } catch (error) {
        console.error('Error writing file:', error);
    }
}