# Case-Insensitive Regex Search in MongoDB: Unexpected Behavior

This repository illustrates a common pitfall when performing case-insensitive regular expression searches in MongoDB.  The provided code demonstrates the issue and offers an optimized solution using case-insensitive indexes.

## Problem
The initial `bug.js` script uses a case-insensitive regular expression (`/John/i`) to search for users. While seemingly straightforward, this approach can lead to performance issues if the collection lacks a suitable index, resulting in slower query times, especially with large datasets.  In some cases, it might not match expected results.

## Solution
The optimized solution in `bugSolution.js` addresses this problem by correctly using case-insensitive indexes.  For robust and efficient case-insensitive searches, ensuring an appropriate index is crucial.

## How to Reproduce
1. Clone the repository.
2. Make sure MongoDB is running.
3. Create a collection of users. 
4. Run the `bug.js` script. Observe the execution time and results.
5. Run the `bugSolution.js` script. Compare the execution time and results to the previous step.

The solution showcases better performance and reliability.
