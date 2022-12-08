import { render } from '@testing-library/react';

import App from './App';

// test that the App component renders
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });

  // test that the App component renders the text "Hello World"
  test('renders Hello World text', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello world')).toBeInTheDocument();
  });
});
