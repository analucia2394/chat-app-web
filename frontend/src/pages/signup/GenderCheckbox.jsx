import React from 'react'

const GenderCheckbox = ({oncheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
                <span className='label-text text-black'>Hombre</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                    checked={selectedGender === "male"}
                    onChange={() => oncheckboxChange("male")}
                />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""} `}>
                <span className='label-text text-black'>Mujer</span>
                <input type='checkbox' className='checkbox border-slate-900' 
                    checked={selectedGender === "female"}
                    onChange={() => oncheckboxChange("female")}
                />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox

// STARTED CODE
/*
import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-black'>Hombre</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text text-black'>Mujer</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>
        </div>

    </div>
  )
}

export default GenderCheckbox */