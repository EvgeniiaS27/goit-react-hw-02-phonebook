import PropTypes from 'prop-types';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <label>
      Finde contacts by name
      <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
