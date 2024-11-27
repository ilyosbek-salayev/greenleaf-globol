import React, { useState } from 'react'

const IstemolchiForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (!name || !contact) {
            setError('Iltimos, barcha maydonlarni to‘ldiring.');
            return;
        }
        onSubmit({ name, contact });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Ro'yxatdan o'tish</h2>
            <input
                type="text"
                placeholder="Ismingiz va Familyangiz"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ margin: '10px', padding: '10px' }}
            />
            <input
                type="text"
                placeholder="Telefon yoki Email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                style={{ margin: '10px', padding: '10px' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleSubmit}>Tasdiqlash</button>
        </div>
    )
}

export default IstemolchiForm