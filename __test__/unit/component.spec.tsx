import { render } from '@testing-library/react';
import App from 'App';
describe('test', () => {
  it('should render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
