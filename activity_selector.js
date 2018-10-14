class Activity {
  constructor(activity, startTime, finishTime) {
    this.activity = activity;
    this.startTime = startTime;
    this.finishTime = finishTime;
  }
}

function mergeSort(arr) {
  // if the array is length one or zero, return the array
  if (arr.length < 2) {
    return arr;
  }
  // figure out the middle point
  var middle = Math.floor(arr.length / 2);

  // create an array of the left half
  var left = arr.slice(0, middle);

  // create an array of right half
  var right = arr.slice(middle, arr.length);

  // call merge on a recursively called left half and right half
  return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
  var result = [];

  // while both arrays have elements in them, zip them together
  while (left.length && right.length) {
    // if the left array first element is less than the right array first element, push to result
    if (left[0].finishTime() <= right[0].finishTime()) {
        result.push(left.shift());
    // else push the right array first element to result
    } else {
        result.push(right.shift());
    }
  }

  // if left is the only array with elements, push them all in
  while (left.length) {
      result.push(left.shift());
  // if right is the only array with elements, push them all in
  }
  while (right.length) {
    result.push(right.shift());
  }
  // return final result
  return result;
}


/*
This algorithm is called GreedyIterativeActivitySelector

arr is an array containing the activities.
start is an array containing the start times of the activities in arr.
finish is an array containing the finish times of the activities in arr.

returns an Array of activity selections
*/
function gIAS(arr) {
  // Sorts in increasing order of finish times the array of activities arr by using the finish 
  // times stored in the array f.
  mergeSort(arr);
  // Creates a set sched to store the selected activities,
  // and initialises it with the activity arr[0] that has the earliest finish time.
  // Creates k that keeps track of the index of the last selected activity.
  var sched = [arr[0]];
  var k = 0;
  var n = arr.length();
  // Starts iterating from the second element of that array arr up to its last element.
  for (var i = 2; i < n; i++) {
    // If the start time start[i] of the ith activity arr[i] is greater or equal to the finish time f[k] 
    // of the last selected activity arr[k], then arr[i] is compatible to 
    // the selected activities in the set sched, and thus it can be added to sched.
    // The index of the last selected activity is updated to the just added activity arr[i]
    if (arr[i].startTime >= arr[k].finishTime) {
      sched.push(arr[i]);
      k = i;
    }
  }
  return sched;

}

var b = ["Running", "English"];
var s = ["16:30", "14:40"];
var f = ["17:15", "16:00"];
var a = new Activity(b,s,f);
console.log(gIAS(a));