import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <button type="button" onClick={() => onDeleteContact(id)}>
              delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onDeleteContact: PropTypes.func.isRequired,
};
