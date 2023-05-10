import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddJob = () => {
  const navigate = useNavigate();
  // formun stateini tutma
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: '',
    company: '',
    location: '',
    status: 'Interview',
    type: 'Full time',
    date: new Date().toLocaleDateString(),
  });

  // gönder butonuna tıklanınca
  const handleSubmit = () => {
    // alınan veriyi doğrulama
    if (!formState.position || !formState.company || !formState.location) {
      toast.warn('Fill in all fields of the form');
      return;
    }
    // veri gönderme işlemi
    axios
      .post('http://localhost:3030/jobs', formState)
      // eğer atılan istek başarılı olursa
      .then((res) => {
        // kullanıcıyı bilgilendir
        toast.success('New job successfully added');
        // kullanıcıyı ana sayfaya yönlendirir
        navigate('/');
      })
      // eğer başarısız olursa
      .catch((err) => {
        // kullanıcıyı bilgilendir
        toast.error('An error occurred while adding the job');
      });
  };
  return (
    <section className="add-sec">
    <h2>Add a new job</h2>

    <div className="inputs">
      <div className="input-field">
        <label>Position</label>
        <input
          type="text"
          onChange={(e) =>
            setFormState({ ...formState, position: e.target.value })
          }
        />
      </div>

      <div className="input-field">
        <label>Company</label>
        <input
          type="text"
          onChange={(e) =>
            setFormState({ ...formState, company: e.target.value })
          }
        />
      </div>

      <div className="input-field">
        <label>Location</label>
        <input
          type="text"
          onChange={(e) =>
            setFormState({ ...formState, location: e.target.value })
          }
        />
      </div>

      <div className="input-field">
        <label>State</label>
        <select
          onChange={(e) =>
            setFormState({ ...formState, status: e.target.value })
          }
        >
          <option value="Interview">Interview</option>
          <option value="Continues">Continues</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <div className="input-field">
        <label>Type</label>
        <select
          onChange={(e) =>
            setFormState({ ...formState, type: e.target.value })
          }
        >
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Add</button>
    </div>
  </section>
  )
}

export default AddJob
