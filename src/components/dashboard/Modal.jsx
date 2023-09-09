import React, { useState } from "react";



export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      page: "",
      description: "",
      status: "active",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.page && formState.description && formState.status && formState.start && formState.end) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="page">Subject</label>
            <input name="page" onChange={handleChange} value={formState.page} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              value={formState.description}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="complete">Completed</option>
            </select>
          </div>
          <div className="flex">
          <div className="form-group mr-3">
            <label htmlFor="status">Task Deadline
            <span className="text-[11px]"> (Start date)</span>
            </label>
            <input type="date"  value={formState.start}
               name="start"
               onChange={handleChange}
            />
            </div>
            <div className="form-group ml-3">
            <label htmlFor="status">Task Deadline
            <span className="text-[11px]"> (End date)</span>
           </label>
            <input type="date"  value={formState.end}
               name="end"
               onChange={handleChange}
            />
            </div>
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
      
          <button type="submit" className="bg-[#032282] text-white px-5 h-[45px] rounded-md" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
