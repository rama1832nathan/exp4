import { useState } from 'react';
import GreetingA from './components/GreetingA';
import GreetingB from './components/GreetingB';

function App() {
  const [role, setRole] = useState('');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Conditional Rendering App</h1>
      <input
        type="text"
        placeholder="Enter role (admin or guest)"
        value={role}
        onChange={(e) => setRole(e.target.value.toLowerCase())}
        style={{ padding: '8px', fontSize: '16px' }}
      />

      <div style={{ marginTop: '20px' }}>
        {role === 'admin' ? 
        (<GreetingA />) : role === 'guest' ? 
        (<GreetingB />) : (<p>Please enter "admin" or "guest"</p>)
        }
      </div>
    </div>
  );
}

export default App;
