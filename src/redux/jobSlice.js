import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  filtredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: 'jobSlice',
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filtredJobs = action.payload;
      state.initialized = true;
    },

    handleInputChange: (state, action) => {
      // İNPUTA YAZILANA GÖRE ANA DİZİYİ FİLTRELEME
      const filtredByQuery = state.jobs.filter((job) => {
        // input ve dizi verisini küçük harfe dönüştürdük
        const query = action.payload.toLowerCase();
        const selectedJob = job.company.toLowerCase();
        // inputa girilen değeri içeren işleri dödürdük
        return selectedJob.includes(query);
      });
      // oluşan filtrelenmiş diziyi state aktarma
      state.filtredJobs = filtredByQuery;
    },

    handleStatusChange: (state, action) => {
      // gelen aksiyon verisine göre durumları karşılaştırıp filtreleme
      const filtredByStatus = state.jobs.filter(
        (job) => job.status === action.payload
      );
      // oluşan filtrelenmiş diziyi state'e aktarma
      state.filtredJobs = filtredByStatus;
    },

    // sıralama kısmı
    handleSortChange: (state, action) => {
      switch (action.payload) {
        case 'a-z':
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return -1;
            if (a.company > b.company) return 1;

            return 0;
          });
          break;

        case 'z-a':
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return 1;
            if (a.company > b.company) return -1;

            return 0;
          });
          break;

        case 'First-new':
          state.filtredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;

        case 'First-old':
          state.filtredJobs
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .reverse();
          break;

        default:
          break;
      }
    },

    // ana state ten filtrelenmimş state diziyi aktardık
    handleReset: (state) => {
      state.filtredJobs = state.jobs;
    },
  },
});

export const {
  setJobs,
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} = jobSlice.actions;

export default jobSlice.reducer;
