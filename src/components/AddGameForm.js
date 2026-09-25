import { useState } from 'react';

function AddGameForm() {
  const [gameName, setGameName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};

    if (!gameName.trim()) {
      newErrors.gameName = 'This field is required';
    }

    if (description.length > 200) {
      newErrors.description = 'Max length is 200';
    }

    if (!price || Number(price) <= 0) {
      newErrors.price = 'Price should be greater than 0';
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Submitted:', { gameName, description, price });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <h1>Add New Game</h1>
      <hr />

      <label>Game name</label>
      <input
        type="text"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
        className={errors.gameName ? 'input-error' : ''}
      />
      {errors.gameName && <p className="error-text">{errors.gameName}</p>}

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={errors.description ? 'input-error' : ''}
        rows={5}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}

      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={errors.price ? 'input-error' : ''}
      />
      {errors.price && <p className="error-text">{errors.price}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddGameForm;