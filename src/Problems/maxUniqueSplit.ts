// https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/?envType=daily-question&envId=2024-10-21

function maxUniqueSplit(s: string): number {
  let maxUniqueSubStr = 0;

  const backTrack = (start: number, subsSet: Set<string>) => {
    if (start === s.length) {
      maxUniqueSubStr = Math.max(maxUniqueSubStr, subsSet.size);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      let subStr = s.slice(start, end);

      if (!subsSet.has(subStr)) {
        subsSet.add(subStr);

        backTrack(end, subsSet);

        subsSet.delete(subStr);
      }
    }
  };

  backTrack(0, new Set());

  return maxUniqueSubStr;
}

console.log(maxUniqueSplit("ababccc"));
