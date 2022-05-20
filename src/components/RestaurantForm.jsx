import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useRestaurants } from '../hooks/restaurants';

export default function RestaurantForm({ label='Edit Restaurant' }) {
  const { addNewRestaurant } = useRestaurants();
  const { formState, handleFormChange, formError, setFormError } = useForm({
    name: '',
    location: '',
    notes: '',
    price: '',
    rating: '',
    type: '',
  });


  async function handleSubmit(event) {
    event.preventDefault();
    if (!formState.name) return setFormError('Name is required');
    if (!formState.location) return setFormError('Location is required');
    if (!formState.notes) return setFormError('Notes are required');
    if (!formState.price) return setFormError('Price is required');
    if (!formState.rating) return setFormError('Rating is required');
    if (!formState.type) return setFormError('Type is required');

    addNewRestaurant(formState);
  }

  return (
    <section>
      <legend>{label}</legend>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={handleFormChange}
        />
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Location"
          value={formState.location}
          onChange={handleFormChange}
        />
        <input
          id="notes"
          name="notes"
          type="text"
          placeholder="Notes"
          value={formState.notes}
          onChange={handleFormChange}
        />
        <input
          id="price"
          name="price"
          type="text"
          placeholder="$$$$$"
          value={formState.price}
          onChange={handleFormChange}
        />
        <input
          id="rating"
          name="rating"
          type="number"
          placeholder="Rating (out of 5)"
          value={formState.rating}
          onChange={handleFormChange}
        />
        <input
          id="type"
          name="type"
          type="text"
          placeholder="Type"
          value={formState.type}
          onChange={handleFormChange}
        />
        <button>Save</button>
      </form>
    </section>
  );
}
