import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EvolutionXLogo() {
  // Simple stylized 'E' logo SVG
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#10101A"/>
      <path d="M14 16H34M14 24H28M14 32H22" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

// Add CSS for animated lights
const styles = `
.login-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background: linear-gradient(120deg, #181828 0%, #10101A 100%);
}
.bloom-light {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.7;
  mix-blend-mode: lighten;
  animation: moveLight 5s linear infinite alternate;
}
.bloom1 {
  width: 420px; height: 420px;
  left: 10%; top: 20%;
  background: radial-gradient(circle at 30% 30%, #7b2ff2 0%, #f357a8 100%);
  animation-delay: 0s;
}
.bloom2 {
  width: 320px; height: 320px;
  left: 60%; top: 10%;
  background: radial-gradient(circle at 70% 30%, #2563eb 0%, #7b2ff2 100%);
  animation-delay: 2s;
}
.bloom3 {
  width: 380px; height: 380px;
  left: 40%; top: 60%;
  background: radial-gradient(circle at 50% 70%, #f357a8 0%, #2563eb 100%);
  animation-delay: 4s;
}
@keyframes moveLight {
  0% { transform: translateY(0px) translateX(0px) scale(1); }
  25% { transform: translateY(-40px) translateX(60px) scale(1.08); }
  50% { transform: translateY(30px) translateX(-40px) scale(0.95); }
  75% { transform: translateY(60px) translateX(40px) scale(1.05); }
  100% { transform: translateY(-30px) translateX(-60px) scale(1); }
}
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock authentication
    navigate('/home');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      overflow: 'hidden',
    }}>
      {/* Inject styles for lights */}
      <style>{styles}</style>
      {/* Animated bloom lights */}
      <div className="login-bg">
        <div className="bloom-light bloom1" />
        <div className="bloom-light bloom2" />
        <div className="bloom-light bloom3" />
      </div>
      {/* Login card */}
      <div style={{
        background: 'rgba(20, 20, 40, 0.95)',
        borderRadius: '20px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        padding: '48px 36px',
        minWidth: '340px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
      }}>
        <div style={{ marginBottom: '32px' }}>
          <EvolutionXLogo />
        </div>
        <h2 style={{ color: '#fff', marginBottom: '24px', fontWeight: 700, fontSize: '2rem', letterSpacing: '0.02em' }}>Sign In</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              marginBottom: '16px',
              borderRadius: '10px',
              border: 'none',
              background: '#181828',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.07)',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 16px',
              marginBottom: '24px',
              borderRadius: '10px',
              border: 'none',
              background: '#181828',
              color: '#fff',
              fontSize: '1rem',
              outline: 'none',
              boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.07)',
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(90deg, #2563eb 0%, #7b2ff2 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.17)',
              transition: 'background 0.2s',
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login; 