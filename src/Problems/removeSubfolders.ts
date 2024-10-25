//https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/?envType=daily-question&envId=2024-10-25

function removeSubfolders(folder: string[]): string[] {
  const result: string[] = [];

  folder.sort();

  for (let i = 0; i < folder.length; i++) {
    let currFolder = folder[i];

    if (
      result.length === 0 ||
      !currFolder.startsWith(result[result.length - 1] + "/")
    ) {
      result.push(currFolder);
    }
  }

  return result;
}

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
