import React, { useState } from 'react';
import { X } from 'lucide-react';

export function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    const endpoint = isSignUp ? '/api/register' : '/api/login';
    const payload = isSignUp ? { name, email, password } : { email, password };

    try {
      const res = await fetch(`http://localhost:5001${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (isSignUp) {
        setSuccessMessage('Account created successfully! You can now sign in.');
        setIsSignUp(false);
        setPassword('');
      } else {
        setSuccessMessage('Signed in successfully!');
        if (onAuthSuccess) onAuthSuccess(data);
        setTimeout(() => {
          onClose();
        }, 1000);
      }
    } catch (err) {
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isSignUp ? 'Create an account' : 'Welcome back'}
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            {isSignUp
              ? 'Sign up to start booking appointments and managing orders.'
              : 'Sign in to manage your orders, prescriptions and appointments.'}
          </p>
        </div>

        {successMessage && (
          <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-700 border border-green-200">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-200">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="adedinsewoadetomiwa@gmail.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-red-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-red-600 py-3 text-sm font-semibold text-white shadow hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading
              ? 'Processing...'
              : isSignUp
              ? 'Create Account'
              : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          {isSignUp ? (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={toggleMode}
                className="font-bold text-red-600 hover:underline"
              >
                Sign in
              </button>
            </>
          ) : (
            <>
              New to Gozak?{' '}
              <button
                type="button"
                onClick={toggleMode}
                className="font-bold text-red-600 hover:underline"
              >
                Create an account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// Named aliases for all modals Navbar might expect
export const SignInModal = AuthModal;
export const SignUpModal = AuthModal;

export function AppointmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Appointment</h2>
        <p className="text-sm text-gray-500 mb-4">
          Select date and time for your medical consultation.
        </p>
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-red-600 py-2 text-sm font-semibold text-white shadow hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

// Default export
export default AuthModal;