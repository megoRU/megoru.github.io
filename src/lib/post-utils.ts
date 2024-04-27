import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Библиотека для парсинга метаданных из Markdown

const postsDirectory = path.join(process.cwd(), 'blog'); // Путь к директории с постами

export function getPostData(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}/index.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        ...data
    };
}

export function getPostsFiles() {
    return fs.readdirSync(postsDirectory);
}