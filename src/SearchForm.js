import React from "react";

function SearchForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="city" id="city" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
