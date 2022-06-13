import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { upd } from '../../Redux/FormReducer'
const Update = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  console.log('useParams', id)
  const [formdata, setformdata] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    City: '',
    State: '',
    PinCode: '',
    confirm: '',
  })
  const handlchange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handlsubmit = (e) => {
    e.preventDefault()
    dispatch(upd({ data: formdata, id: id }))

    localStorage.setItem('data', JSON.stringify(formdata))
    setformdata({
      FirstName: '',
      LastName: '',
      Email: '',
      City: '',
      State: '',
      PinCode: '',
      confirm: '',
    })
  }
  const handlchecked = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.checked })
  }

  const state = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Manipur',
    'Punjab',
    'Rajasthan',
    'Uttar Pradesh',
    'Uttarakhand',
  ]

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto mt-5">
            <form className="row g-3 needs-validation" onSubmit={handlsubmit}>
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="FirstName"
                  required
                  maxLength={16}
                  minLength={3}
                  onChange={handlchange}
                  value={formdata.FirstName}
                />
                <div className="valid-feedback">plaese enter valid name</div>
              </div>
              <div className="col-md-4">
                <label htmlFor="validationCustom02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  name="LastName"
                  required
                  maxLength={16}
                  minLength={3}
                  onChange={handlchange}
                  value={formdata.LastName}
                />

                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={handlchange}
                    name="Email"
                    value={formdata.Email}
                  />
                  <div className="invalid-feedback">
                    Please choose a username.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="validationCustom03" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  required
                  minLength={3}
                  onChange={handlchange}
                  name="City"
                  value={formdata.City}
                />
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom04" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="validationCustom04"
                  onChange={handlchange}
                  required
                  value={formdata.State}
                  name="State"
                >
                  {state.map((cur, index) => {
                    return (
                      <option key={index} value={cur}>
                        {cur}
                      </option>
                    )
                  })}
                </select>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
              <div className="col-md-3">
                <label htmlFor="validationCustom05" className="form-label">
                  PinCode
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom05"
                  required
                  min={6}
                  onChange={handlchange}
                  name="PinCode"
                />
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck"
                    required
                    onClick={handlchecked}
                    name="confirm"
                  />
                  <label className="form-check-label" htmlFor="invalidCheck">
                    Agree to terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Update
