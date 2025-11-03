import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error(
    "Fatal Error: The root element with ID 'root' was not found in the DOM. " +
    "The React application cannot be mounted. Please ensure that your " +
    "index.html file contains an element with id='root'."
  );
}
