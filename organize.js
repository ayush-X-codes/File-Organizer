import fs from "node:fs/promises";
import path from "node:path";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

async function createFolder(userFolder, newFolder) {
  try {
    const targetPath = path.join(userFolder, newFolder);
    console.log("created directory: ", targetPath);

    await fs.mkdir(targetPath, { recursive: true });

    console.log(`Directory created successfully at: ${targetPath}`);
  } catch (error) {
    console.error(`Error Creating Directory: ${error}`);
  }
}

async function moveFiles(source, destination) {
  try {
    await fs.rename(source, destination);
    console.log("File moved successfully!");
  } catch (error) {
    console.error("Error moving file: ", error);
  }
}

async function organizeFile() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
  });

  let folder;

  try {
    const folderPath = await rl.question(
      "Enter path of the folder you want to organize: ",
    );
    console.log("File path is: ", folderPath);
    folder = folderPath;
  } finally {
    rl.close();
  }

  const absolutePath = path.resolve(folder.trim());
  const entries = await fs.readdir(absolutePath, { withFileTypes: true });

  const files = entries
    .filter((entery) => entery.isFile())
    .map((entery) => entery.name);
  console.log("files are: ", files);
  for (const file of files) {
    if (
      file.endsWith(".png") ||
      file.endsWith(".jpg") ||
      file.endsWith(".webp") ||
      file.endsWith(".jpeg")
    ) {
      const oldDir = path.join(folder, file);
      const newDir = path.join(folder, "Images", file);
      await createFolder(folder, "Images");
      await moveFiles(oldDir, newDir);
    } else if (
      file.endsWith(".pdf") ||
      file.endsWith(".md") ||
      file.endsWith(".doc") ||
      file.endsWith(".docx") ||
      file.endsWith(".txt")
    ) {
      const oldDir = path.join(folder, file);
      const newDir = path.join(folder, "Documents", file);
      await createFolder(folder, "Documents");
      await moveFiles(oldDir, newDir);
    } else if (file.endsWith(".mp4") || file.endsWith(".mkv")) {
      const oldDir = path.join(folder, file);
      const newDir = path.join(folder, "Documents", file);
      await createFolder(folder, "Documents");
      await moveFiles(oldDir, newDir);
    } else if (file.endsWith(".exe") || file.endsWith(".msi")) {
      const oldDir = path.join(folder, file);
      const newDir = path.join(folder, "Programs", file);
      await createFolder(folder, "Programs");
      await moveFiles(oldDir, newDir);
    } else if (file.endsWith(".html") || file.endsWith(".htm")) {
      const oldDir = path.join(folder, file);
      const newDir = path.join(folder, "WebPages", file);
      await createFolder(folder, "WebPages");
      await moveFiles(oldDir, newDir);
    } else if (
      file.endsWith(".json") ||
      file.endsWith(".xml") ||
      file.endsWith(".csv")
    ) {
      const oldDir = path.join(folder, file);
      const newDir = path.join(folder, "Data", file);
      await createFolder(folder, "Data");
      await moveFiles(oldDir, newDir);
    }
  }
}

organizeFile();
