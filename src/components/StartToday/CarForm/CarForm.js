import React,{useState} from 'react';
import Select from 'react-select'
import styles from './CarForm.module.scss';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const selectStyles = {
    control: base => ({
        ...base,
        height: 40,
        minHeight: 40,
    }),
    valueContainer: (base) => ({
        ...base,
        height: 40,
        minHeight: 40,
    })
}

  
const CarForm = () => {
    const [make, setMake] = useState(null)
    const [model, setModel] = useState(null)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    console.log(make)
    return (
        <>
            <p className={styles.head}>Enter your car details</p>
            <div className={styles['form-elements']}>
                <div className={styles.element}>
                    <label>
                        Car make
                    </label>
                    <Select 
                        value={make}
                        onChange={(val)=>setMake(val)}
                        styles={selectStyles}
                        options={options} 
                    />
                </div>
                <div className={styles.element}>
                    <label>
                        Car Model
                    </label>
                    <Select 
                        value={model}
                        onChange={(val)=>setModel(val)}
                        styles={selectStyles}
                        options={options} 
                    />
                </div>
                <span className={styles.separator}></span>
                <p className={styles.head}>Enter Contact Info</p>
                <div className={styles.element}>
                    <label>
                        Your Full Name
                    </label>
                    <input type="text" value={name} onChange={({target:{value}})=> setName(value)}/>
                </div>
                <div className={styles.element}>
                    <label>
                        Your Phone Number
                    </label>
                    <input type="text"  value={phone} onChange={({target:{value}})=> setPhone(value)}/>
                </div>
                <button className={styles.btn} type="submit">Send Your Inquiry</button>
            </div>
        </>
    )
}

export default CarForm
