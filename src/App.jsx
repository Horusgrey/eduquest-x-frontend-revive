import React, { useEffect, useMemo, useState } from 'react';

const COURSES_URL = 'https://eduquest-backend-api.zhorton888.repl.co/api/courses';
const JOBS_URL = 'https://eduquest-backend-api.zhorton888.repl.co/api/jobs';

function useFilteredItems(items, query) {
  return useMemo(() => {
    const lowered = query.trim().toLowerCase();
    if (!lowered) return items;
    return items.filter(item => item.title.toLowerCase().includes(lowered));
  }, [items, query]);
}

export default function App() {
  const [courses, setCourses] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const [courseRes, jobRes] = await Promise.all([
          fetch(COURSES_URL),
          fetch(JOBS_URL),
        ]);

        if (!courseRes.ok || !jobRes.ok) {
          throw new Error('The server did not return the expected data.');
        }

        const [courseData, jobData] = await Promise.all([
          courseRes.json(),
          jobRes.json(),
        ]);

        setCourses(courseData || []);
        setJobs(jobData || []);
        setStatus('ready');
      } catch (err) {
        console.error(err);
        setError('We could not load courses and jobs right now. Please try again soon.');
        setStatus('error');
      }
    };

    loadData();
  }, []);

  const filteredCourses = useFilteredItems(courses, query);
  const filteredJobs = useFilteredItems(jobs, query);

  return (
    <main className="app-shell">
      <header>
        <h1>EduQuest</h1>
        <p>No Debt. Real Skills. Get Hired.</p>
        <label className="sr-only" htmlFor="search">Search courses or jobs</label>
        <input
          id="search"
          className="search-input"
          placeholder="Search courses or jobs"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </header>

      {status === 'loading' && <p className="muted">Loading opportunities…</p>}
      {status === 'error' && <p className="error-text">{error}</p>}

      {status === 'ready' && (
        <div className="content-grid">
          <section>
            <div className="section-heading">
              <h2>Courses</h2>
              <span className="count">{filteredCourses.length}</span>
            </div>
            {filteredCourses.length ? (
              <div className="card-stack">
                {filteredCourses.map(course => (
                  <article className="card" key={course.id}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="muted">No courses matched your search.</p>
            )}
          </section>

          <section>
            <div className="section-heading">
              <h2>Jobs</h2>
              <span className="count">{filteredJobs.length}</span>
            </div>
            {filteredJobs.length ? (
              <div className="card-stack">
                {filteredJobs.map(job => (
                  <article className="card card-orange" key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                  </article>
                ))}
              </div>
            ) : (
              <p className="muted">No jobs matched your search.</p>
            )}
          </section>
        </div>
      )}

      <div className="actions">
        <button type="button" className="primary-button">Upload Resume</button>
      </div>
    </main>
  );
}
