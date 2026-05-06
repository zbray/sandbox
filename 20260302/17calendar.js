// 17. The "Calendar Scheduler" (Merging Intervals)

// Description: You are building a calendar app. A 
// user has a messy list of meetings for the day, and 
// some of them overlap. You need to write a function that 
// merges all overlapping meetings into solid blocks of "busy" time.

// The Input: An array of time pairs [startTime, endTime].

// const meetings = [[1, 3], [2, 6], [8, 10], [15, 18]];

// Expected Output: [[1, 6], [8, 10], [15, 18]] (Because 
//   the 1-3 and 2-6 meetings overlap, they become a single 1-6 block).

// Logic Concept: This is a classic whiteboard problem. 
// He first needs to sort the array by the start times. 
// Then, he can iterate through them, keeping track of the 
// "currently active" meeting. If the next meeting starts 
// before the current one ends, he updates the end time. 
// If not, he pushes the current meeting to his result 
// and starts tracking the next one.

function mergeCalendar(meetings) {
  if (meetings.length === 0) return [];

  const sorted = [...meetings].sort((a, b) => a[0] - b[0]);
  const result = [sorted[0]];

  for (let i = 1; i < sorted.length; i++) {
    const current = result[result.length - 1];
    const next = sorted[i];

    if (next[0] <= current[1]) {
      current[1] = Math.max(current[1], next[1]);
    } else {
      result.push(next);
    }
  }

  return result;
}
const meetings = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(mergeCalendar(meetings)); 