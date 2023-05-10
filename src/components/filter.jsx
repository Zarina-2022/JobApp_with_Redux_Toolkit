import { useDispatch } from "react-redux";
import {
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} from "../redux/jobSlice";
import { toast } from "react-toastify";

const Filter = () => {
  const dispatch = useDispatch();

  // şirket ismi inputu değiştiğinde
  const onSearchChange = (e) => {
    dispatch(handleInputChange(e.target.value));
  };

  // durum filtresi değişitiğinde
  const onStatusChange = (e) => {
    dispatch(handleStatusChange(e.target.value));
    toast.success("Successfully filtered", { autoClose: 2000 });
  };

  // sıralama selecti değiştiğinde
  const onSortChange = (e) => {
    dispatch(handleSortChange(e.target.value));
    toast.success("Successfully filtered", { autoClose: 2000 });
  };

  // filtreleri temizle
  const onResetButtonClick = () => {
    // aksiyonu çalıştırma
    dispatch(handleReset());
    // kullanıcıyı bilgilendirme
    toast("Filters cleaned", { autoClose: 2000 });
  };

  return (
    <section className="add-sec filter-sec">
      <h2>Search form</h2>
      <div className="inputs">
        <div className="input-field">
          <label>Company name:</label>
          <input type="text" onChange={onSearchChange} />
        </div>

        <div className="input-field">
          <label>State:</label>
          <select onChange={onStatusChange}>
            <option hidden>All</option>
            <option value="Interview">Interview</option>
            <option value="Rejected">Rejected</option>
            <option value="Continues">Continues</option>
          </select>
        </div>

        <div className="input-field">
          <label>Sort by:</label>
          <select onChange={onSortChange}>
            <option value="First-new">New</option>
            <option value="First-old">Old</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </div>
        <button onClick={onResetButtonClick}>Clean filters</button>
      </div>
    </section>
  );
};

export default Filter;
