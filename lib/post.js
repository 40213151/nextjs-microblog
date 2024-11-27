import path from "path";
import fs from "fs";
import matter from "gray-matter";

// process.cwd()はルートディレクトリを取得する関数
const postsDirectory = path.join(process.cwd(), "posts");

// mdファイルのデータを取得する関数
export function getPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // ファイル名（id）

    // マークダウンファイルを文字列として読み込む
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    // idとデータを返す
    return {
      id,
      ...matterResult.data,
    };
  });
  return allPostsData;
}
