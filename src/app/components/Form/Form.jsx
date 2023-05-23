"use client";
import { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [focusedInput, setFocusedInput] = useState('');

    const handleFocus = (inputName) => {
        setFocusedInput(inputName);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "comment":
                setComment(value);
                break;
            default:
                break;
        }
    };
    const handleSubmit = () => {
        if (name.trim() === '' || email.trim === '') {
            alert('Name and email are required fields');
            return;
        }
        console.log("send");
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
                <div className={styles.form_wrapper}>
                    <label htmlFor="name" className={`${styles.form_label} ${focusedInput === 'name' || name !== '' ? styles.focused : ''}`}>
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        className={styles.form_input}
                        minLength="2"
                        maxLength="20"

                    />
                </div>
                <div className={styles.form_wrapper}>
                    <label htmlFor="email" className={`${styles.form_label} ${focusedInput === 'email' || email !== '' ? styles.focused : ''}`}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        className={styles.form_input}
                        autoComplete="off"
                    />
                </div>

                <div className={styles.form_wrapper}>
                    <label htmlFor="tel" className={`${styles.form_label} ${focusedInput === 'phone' || phone !== '' ? styles.focused : ''}`}>
                        Phone
                    </label>
                    <input type="tel" name="phone" id="tel" className={styles.form_input} value={phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                    />
                </div>

                <div className={styles.form_wrapper}>
                    <label htmlFor="comment" className={`${styles.form_label} ${focusedInput === 'comment' || comment !==
                        '' ? styles.focused : ''}`}>
                        Leave us a few words
                    </label>
                    <textarea
                        name="comment"
                        id="comment"
                        className={styles.form_input}
                        value={comment}
                        onChange={handleChange}
                        onFocus={() => handleFocus('comment')}
                        rows="4"
                        cols="10"
                    ></textarea>
                </div>
                <button type="submit" className={styles.form_btn}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
