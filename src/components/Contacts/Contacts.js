import React from 'react';
import styles from './Contacts.module.css'; // Импортируем стили
import snapchatLogo from '../../assets/snapchat.png'; // Импортируем логотипы соц. сетей
import facebookLogo from '../../assets/facebook.png';
import xLogo from '../../assets/x.png'; // X — логотип Twitter/X


const Contacts = () => {
    return (
      <section className={styles.contactsSection}>
        <div className={styles.contactInfo}>
          <h1>Контакты</h1>
          <ul>
            <li>Телефон: 8 (800) 123-45-67</li>
            <li>Email: example@example.com</li>
          </ul>
  
          <form className={styles.contactForm}>
            <input type="email" placeholder="Ваш Email" className={styles.inputField} required />
            <input type="text" placeholder="Ваше Имя" className={styles.inputField} required />
            <textarea placeholder="Ваше Сообщение" className={styles.textArea} required />
            <button type="submit" className={styles.submitButton}>Отправить</button>
          </form>
        </div>
  
        <div className={styles.socialLinks}>
          <p>Найдите нас на:</p>
          <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
            <img src={snapchatLogo} alt="Snapchat" className={styles.socialIcon} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook" className={styles.socialIcon} />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <img src={xLogo} alt="X" className={styles.socialIcon} />
          </a>
        </div>
      </section>
    );
  };
  
  export default Contacts;
  