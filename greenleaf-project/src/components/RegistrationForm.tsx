import { useState } from 'react';

interface RegistrationFormProps {
  section: string;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ section }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!termsAccepted) {
      alert('Shartnomani o‘qish va qabul qilish kerak!');
      return;
    }

    // API ga so‘rov yuborish
    fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, section }),
    }).then((res) => {
      if (res.ok) {
        alert('Ro‘yxatdan muvaffaqiyatli o‘tdingiz!');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ismingiz:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Telefon raqamingiz:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        Shartnomani qabul qilaman
      </label>
      <button type="submit">Yuborish</button>
    </form>
  );
};

export default RegistrationForm;
