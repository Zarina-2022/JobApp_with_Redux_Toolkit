import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setJobs } from "../redux/jobSlice";
import Filter from "../components/filter";

const JobList = () => {
  const state = useSelector((state) => state.jobState);
  const dispatch = useDispatch();

  // veriyi bileşen ekrana basıldığı anda çeker
  useEffect(() => {
    axios
      .get("http://localhost:3030/jobs")
      .then((res) => dispatch(setJobs(res.data)));
  }, []);

  return (
    <>
      <Filter />
      <h3 className="job-count">{state.filtredJobs.length} jobs found </h3>
      <section className="list-section">
        {/* eğer veri çekilmemişse loading yaz değilse ekrana bas */}
        {!state.initialized ? (
          <p>Loading</p>
        ) : (
          state.filtredJobs.map((job) => (
            <div className="job-card" key={job.id}>
              {/* kartın üst kısmı */}
              <div className="head">
                <div className="letter">
                  <p>{job.company[0]}</p>
                </div>
                <div className="info">
                  <p>{job.position}</p>
                  <p>{job.company}</p>
                </div>
              </div>
              {/* kartın alt kısmı*/}
              <div className="body">
                <div className="field">
                  <img src="/images/map.png" />
                  <p>{job.location}</p>
                </div>

                <div className="field">
                  <img src="/images/calendar.png" />
                  <p>{job.date}</p>
                </div>

                <div className="field">
                  <img src="/images/bag.png" />
                  <p>{job.type}</p>
                </div>

                <div className="status">
                  <p className={job.status}>{job.status}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default JobList;
