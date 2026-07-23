import React, { useEffect, useState } from 'react';

export default function AdminPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/bookings');
      if (!response.ok) throw new Error('Failed to fetch appointments.');
      const data = await response.json();
      setBookings(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Could not connect to the booking server.');
    } finally {
      setLoading(false);
    }
  };

  const markAsComplete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/bookings/${id}/complete`, {
        method: 'PATCH',
      });
      if (!response.ok) throw new Error('Failed to complete appointment.');
      // Refresh list locally by removing the completed item from view immediately
      setBookings(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      alert('Error updating status: ' + err.message);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div style={{ padding: '80px 24px 40px 24px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      
      {/* Top Heading */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e5e5e5', paddingBottom: '20px', marginBottom: '30px', width: '100%' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1c1917', margin: 0 }}>
            Management Dashboard
          </h1>
          <p style={{ color: '#6b6661', margin: '4px 0 0 0' }}>Review active & upcoming patient appointments.</p>
        </div>
        <button 
          onClick={fetchBookings}
          disabled={loading}
          style={{ padding: '10px 16px', background: '#e11d48', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', whiteSpace: 'nowrap', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Refreshing...' : 'Refresh Data'}
        </button>
      </div>

      {/* Main Status Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        <div style={{ background: '#ffffff', padding: '20px', borderRadius: '12px', border: '1px solid #e5e5e5', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#a8a29e', fontWeight: 'bold' }}>Active Queue</span>
          <h2 style={{ fontSize: '36px', fontWeight: '900', margin: '10px 0 0 0', color: '#1c1917' }}>{bookings.length}</h2>
        </div>
      </div>

      {/* State Indicators */}
      {loading && bookings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#6b6661' }}>Loading appointments...</div>
      ) : error ? (
        <div style={{ background: '#fef2f2', color: '#b91c1c', padding: '16px', borderRadius: '8px', border: '1px solid #fee2e2' }}>{error}</div>
      ) : bookings.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#a8a29e', border: '2px dashed #e5e5e5', borderRadius: '12px' }}>No active entries found.</div>
      ) : (
        /* Data Layout Table */
        <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#f5f5f4', borderBottom: '1px solid #e5e5e5', color: '#6b6661', fontSize: '12px', textTransform: 'uppercase' }}>
                <th style={{ padding: '14px 20px' }}>Service</th>
                <th style={{ padding: '14px 20px' }}>Date</th>
                <th style={{ padding: '14px 20px' }}>Time Slot</th>
                <th style={{ padding: '14px 20px' }}>Contact</th>
                <th style={{ padding: '14px 20px', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ color: '#44403c', fontSize: '14px' }}>
              {bookings.map((item) => (
                <tr key={item._id} style={{ borderBottom: '1px solid #f5f5f4' }}>
                  <td style={{ padding: '16px 20px', fontWeight: '600', color: '#1c1917' }}>{item.service}</td>
                  <td style={{ padding: '16px 20px' }}>{item.date}</td>
                  <td style={{ padding: '16px 20px' }}>{item.time}</td>
                  <td style={{ padding: '16px 20px', fontFamily: 'monospace', fontSize: '15px' }}>{item.phone}</td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                    <button 
                      onClick={() => markAsComplete(item._id)}
                      style={{ padding: '6px 12px', background: '#10b981', color: '#ffffff', border: 'none', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
                    >
                      Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}