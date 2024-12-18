import { useState } from 'react';
import './App.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a>
					<img src='/src/logo.png' className='logo' alt='Logo' />
				</a>
			</div>
			<h1>Острые пузырьки</h1>
		</>
	);
}

export default App;
