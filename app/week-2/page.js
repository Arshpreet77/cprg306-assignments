import React from 'react';
import StudentInfo from './student-info';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/week-1">Week 1</a></li>
        <li><a href="/week-2">Week 2</a></li>
        <li><a href="/week-3">Week 3</a></li> {/* Added link to week-3 */}
        {/* Add more links as needed */}
      </ul>
      <StudentInfo />
    </main>
  );
}
