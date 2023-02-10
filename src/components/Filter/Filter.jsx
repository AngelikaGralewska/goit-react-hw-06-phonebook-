import PropTypes from 'prop-types';
import style from './Filter.module.css';

 export const FilterContact = ({ filter, handleChange }) => (
    <div>
      <label className={style.filterLabel}>
      Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          className={style.filterInput}
        />
      </label>
    </div>
  );
  
  FilterContact.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
  };