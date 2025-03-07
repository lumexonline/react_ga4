
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-6NH1BTWM64'; // Replace with your actual GA4 Measurement ID

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (event, params) => {
  ReactGA.event(event, params);
};

export const setUserId = (userId) => {
  ReactGA.set({ user_id: userId });
};
    
