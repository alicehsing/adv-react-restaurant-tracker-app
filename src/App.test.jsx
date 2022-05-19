import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';

describe('App', () => {
    it('renders the home page with a header and a link to restaurant view', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        await screen.findByRole('button', { name: /sign out/i });

        const restaurantLink = screen.getByRole('link', { name: 'Start your log here' });
        userEvent.click(restaurantLink);

        const emailInput = await screen.findByPlaceholderText('Email');
        const passwordInput = await screen.findByPlaceholderText('Password');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
});