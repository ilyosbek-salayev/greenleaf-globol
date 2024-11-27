import React, { useState } from 'react'

const CodeVerification = ({ code, onVerify }: { code: string; onVerify: () => void }) => {
    const [userCode, setUserCode] = useState('');
    const [error, setError] = useState('');

    const handleVerify = () => {
        if (userCode === code) {
            onVerify();
        } else {
            setError('Kod noto‘g‘ri!');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>SMS orqali yuborilgan kodni kiriting</h2>
            <input
                type="text"
                placeholder="Kod"
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
                style={{ margin: '10px', padding: '10px' }}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleVerify}>Tasdiqlash</button>
        </div>
    )
}

export default CodeVerification 