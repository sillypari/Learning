import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function AmiArchiveLogo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="12" fill="#5B3DF6"/>
      <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="bold" dy=".3em">AA</text>
    </svg>
  );
}

const styles = `
.login-bg {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 0;
  background: radial-gradient(circle at 60% 10%, #23234f 0%, #10101A 100%);
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

function getPasswordStrength(password) {
  if (!password) return { label: '', color: '' };
  if (password.length > 7 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
    return { label: 'Strong', color: 'green' };
  }
  if (password.length > 5) {
    return { label: 'Medium', color: 'orange' };
  }
  return { label: 'Weak', color: 'red' };
}

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();
  const strength = getPasswordStrength(password);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock signup
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
      <style>{styles}</style>
      <div className="login-bg">
        <div className="bloom-light bloom1" />
        <div className="bloom-light bloom2" />
        <div className="bloom-light bloom3" />
      </div>
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.17)',
        padding: '48px 36px',
        minWidth: '380px',
        maxWidth: '95vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 2,
      }}>
        <div style={{ marginBottom: '18px' }}>
          <AmiArchiveLogo />
        </div>
        <div style={{ fontWeight: 700, fontSize: '1.3rem', color: '#5B3DF6', marginBottom: 6 }}>AmiArchive</div>
        <h2 style={{ color: '#181828', marginBottom: '6px', fontWeight: 800, fontSize: '2rem', letterSpacing: '0.01em', textAlign: 'center' }}>Create your account</h2>
        <div style={{ color: '#444', marginBottom: 24, fontSize: 16, textAlign: 'center' }}>Sign up to access your study materials</div>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontWeight: 500, color: '#222', fontSize: 14 }}>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                marginTop: 6,
                borderRadius: '10px',
                border: '1px solid #e0e0e0',
                background: '#f7f7fa',
                color: '#222',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontWeight: 500, color: '#222', fontSize: 14 }}>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                marginTop: 6,
                borderRadius: '10px',
                border: '1px solid #e0e0e0',
                background: '#f7f7fa',
                color: '#222',
                fontSize: '1rem',
                outline: 'none',
                marginBottom: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 6 }}>
            <label style={{ fontWeight: 500, color: '#222', fontSize: 14 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  marginTop: 6,
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  background: '#f7f7fa',
                  color: '#222',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
              <span
                onClick={() => setShowPassword((v) => !v)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#888',
                  fontSize: 18,
                  userSelect: 'none',
                }}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </span>
            </div>
            {strength.label && (
              <div style={{ color: strength.color, fontSize: 13, marginTop: 4, marginLeft: 2 }}>
                ● Password strength: {strength.label}
              </div>
            )}
          </div>
          <div style={{ marginBottom: 18 }}>
            <label style={{ fontWeight: 500, color: '#222', fontSize: 14 }}>Confirm Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 40px 12px 16px',
                  marginTop: 6,
                  borderRadius: '10px',
                  border: '1px solid #e0e0e0',
                  background: '#f7f7fa',
                  color: '#222',
                  fontSize: '1rem',
                  outline: 'none',
                }}
              />
              <span
                onClick={() => setShowConfirm((v) => !v)}
                style={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#888',
                  fontSize: 18,
                  userSelect: 'none',
                }}
                title={showConfirm ? 'Hide password' : 'Show password'}
              >
                {showConfirm ? '🙈' : '👁️'}
              </span>
            </div>
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              background: 'linear-gradient(90deg, #5B3DF6 0%, #7b2ff2 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 rgba(31, 38, 135, 0.13)',
              transition: 'background 0.2s',
              marginBottom: 12,
            }}
          >
            Sign Up
          </button>
        </form>
        <div style={{ width: '100%', textAlign: 'center', margin: '16px 0 8px 0', color: '#888', fontSize: 14, position: 'relative' }}>
          <span style={{ background: '#fff', padding: '0 12px', position: 'relative', zIndex: 1 }}>or continue with</span>
          <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: '#e0e0e0', zIndex: 0 }} />
        </div>
        <button
          type="button"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '10px',
            border: '1px solid #e0e0e0',
            background: '#fff',
            color: '#222',
            fontWeight: 600,
            fontSize: '1.05rem',
            cursor: 'pointer',
            marginBottom: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          <svg width="22" height="22" viewBox="0 0 48 48" style={{ marginRight: 8 }}><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.527 29.418 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.527 5.67 28.97 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.045 0 20-8.954 20-20 0-1.341-.138-2.651-.389-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.004 13 24 13c2.69 0 5.164.957 7.104 2.53l6.062-6.062C33.527 5.67 28.97 4 24 4c-7.732 0-14.313 4.388-17.694 10.691z"/><path fill="#FBBC05" d="M24 44c5.318 0 10.18-1.824 13.982-4.958l-6.463-5.309C29.418 36 24 36 24 36c-5.418 0-9.973-3.473-11.303-8.083l-6.571 5.081C9.687 39.612 16.268 44 24 44z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303C34.527 32.527 29.418 36 24 36c-5.418 0-9.973-3.473-11.303-8.083l-6.571 5.081C9.687 39.612 16.268 44 24 44c4.97 0 9.527-1.67 13.104-4.53l-6.463-5.309C29.418 36 24 36 24 36c-5.418 0-9.973-3.473-11.303-8.083l-6.571 5.081C9.687 39.612 16.268 44 24 44c4.97 0 9.527-1.67 13.104-4.53l-6.463-5.309C29.418 36 24 36 24 36z"/></g></svg>
          Continue with Google
        </button>
        <div style={{ marginTop: 10, fontSize: 15, color: '#444', textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#5B3DF6', fontWeight: 600, textDecoration: 'none' }}>Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup; 