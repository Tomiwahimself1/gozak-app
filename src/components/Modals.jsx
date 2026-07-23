import React from "react";
import { X, Calendar } from "lucide-react";
import { BRAND } from "../lib/brand";
import { Btn } from "./Btn";

export function ModalShell({ open, onClose, title, subtitle, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" style={{ animation: "fadeIn .25s ease" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 overflow-hidden"
        style={{ animation: "fadeInUp .35s cubic-bezier(.2,.7,.2,1)" }}
      >
        <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full opacity-10" style={{ background: BRAND.red }} />
        <button onClick={onClose} className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-stone-500 hover:bg-stone-100 transition">
          <X size={18} />
        </button>
        <h3 className="text-2xl font-extrabold" style={{ color: BRAND.dark, fontFamily: "Manrope, sans-serif" }}>{title}</h3>
        {subtitle && <p className="text-sm text-stone-500 mt-2">{subtitle}</p>}
        <div className="mt-6 relative">{children}</div>
      </div>
    </div>
  );
}

// REAL SIGN IN MODAL (Updated to Port 5001)
export function SignInModal({ open, onClose, onSwitchToSignUp }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        onClose();
        window.location.href = '/admin';
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('Could not connect to authentication server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell open={open} onClose={onClose} title="Welcome back" subtitle="Sign in to manage your orders, prescriptions and appointments.">
      <form className="space-y-4" onSubmit={handleSignIn}>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Email</label>
          <input 
            type="email" 
            required
            placeholder="you@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:ring-2 text-sm" 
          />
        </div>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Password</label>
          <input 
            type="password" 
            required
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:ring-2 text-sm" 
          />
        </div>
        <Btn type="submit" variant="primary" className="w-full mt-2" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </Btn>
        <p className="text-center text-xs text-stone-500 pt-2">
          New to Gozak? <span className="font-bold cursor-pointer text-rose-600 hover:underline" onClick={onSwitchToSignUp}>Create an account</span>
        </p>
      </form>
    </ModalShell>
  );
}

// REAL SIGN UP MODAL (Updated to Port 5001)
export function SignUpModal({ open, onClose, onSwitchToSignIn }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Account created successfully! You can now sign in.');
        onSwitchToSignIn();
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert('Could not connect to authentication server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell open={open} onClose={onClose} title="Create an account" subtitle="Register a new management profile for Gozak & Co.">
      <form className="space-y-4" onSubmit={handleSignUp}>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Email Address</label>
          <input 
            type="email" 
            required
            placeholder="admin@gozak.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:ring-2 text-sm" 
          />
        </div>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Password</label>
          <input 
            type="password" 
            required
            placeholder="Choose a strong password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none focus:ring-2 text-sm" 
          />
        </div>
        <Btn type="submit" variant="gold" className="w-full mt-2" disabled={loading}>
          {loading ? "Creating Account..." : "Register Profile"}
        </Btn>
        <p className="text-center text-xs text-stone-500 pt-2">
          Already have an account? <span className="font-bold cursor-pointer text-amber-600 hover:underline" onClick={onSwitchToSignIn}>Sign In instead</span>
        </p>
      </form>
    </ModalShell>
  );
}

// REAL APPOINTMENT MODAL (Updated to Port 5001)
export function AppointmentModal({ open, onClose }) {
  const services = ["Medication Counseling", "Blood Pressure Check", "Blood Sugar Test", "Health Screening", "Telemedicine Consultation"];
  
  const [formData, setFormData] = React.useState({
    name: '',
    service: services[0],
    date: '',
    time: '',
    phone: ''
  });
  
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:5001/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFormData({ name: '', service: services[0], date: '', time: '', phone: '' });
        onClose();
      } else {
        alert(`Booking failed: ${data.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Could not connect to the booking server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalShell open={open} onClose={onClose} title="Book an appointment" subtitle="Reserve a slot with our pharmacists or health team.">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Patient Name</label>
          <input 
            type="text" 
            name="name"
            required
            placeholder="John Doe" 
            value={formData.name}
            onChange={handleChange}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" 
          />
        </div>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Service</label>
          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm bg-white"
          >
            {services.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Date</label>
            <input 
              type="date" 
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" 
            />
          </div>
          <div>
            <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Time</label>
            <input 
              type="time" 
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" 
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-stone-600 uppercase tracking-wide">Phone Number</label>
          <input 
            type="tel" 
            name="phone"
            required
            placeholder="+234 8XX XXX XXXX" 
            value={formData.phone}
            onChange={handleChange}
            className="mt-1.5 w-full px-4 py-3 rounded-xl border border-stone-200 outline-none text-sm" 
          />
        </div>
        <Btn type="submit" variant="gold" className="w-full mt-2" icon={Calendar} disabled={loading}>
          {loading ? "Processing..." : "Confirm Appointment"}
        </Btn>
      </form>
    </ModalShell>
  );
}