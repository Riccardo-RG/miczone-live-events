import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <div className="min-h-screen bg-miczone-dark text-white">
      <Navbar sections={sections} />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-miczone-black/50 backdrop-blur-md p-6 md:p-8 rounded-lg border border-miczone-gray">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Cookie Policy</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                This Cookie Policy explains how Miczone Live ("we," "our," or "us") uses cookies and similar technologies 
                on our website. This policy is designed to help you understand what cookies are, how we use them, and 
                the choices you have regarding their use.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">2. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">3. How We Use Cookies</h2>
              <p>
                <strong>Our website only uses strictly necessary cookies.</strong> These cookies are essential for the website to function 
                properly and cannot be switched off in our systems. They are usually only set in response to actions made by you which 
                amount to a request for services, such as setting your privacy preferences or logging in.
              </p>
              <p>
                We do not use any of the following types of cookies:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Performance/Analytics Cookies (we don't track visitor statistics)</li>
                <li>Functional Cookies (except those strictly necessary for basic website functions)</li>
                <li>Targeting/Advertising Cookies (we don't serve personalized ads)</li>
                <li>Third-Party Cookies (we don't allow third parties to place cookies on your device)</li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">4. Strictly Necessary Cookies We Use</h2>
              <p>
                The strictly necessary cookies we use are:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>
                  <strong>cookie-consent-accepted</strong>: This cookie remembers that you have seen and interacted with our cookie notice. 
                  It prevents the notice from appearing again on every page you visit.
                </li>
              </ul>
              <p>
                We use local storage (not cookies) for:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>
                  <strong>sidebar:state</strong>: This stores your preference for the sidebar state (expanded or collapsed) 
                  to improve your browsing experience.
                </li>
              </ul>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">5. Managing Cookies</h2>
              <p>
                Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies, 
                or to alert you when cookies are being sent. The following links provide information on how to modify your 
                cookie settings in different browsers:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-miczone-accent hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-miczone-accent hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-miczone-accent hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-miczone-accent hover:underline">Microsoft Edge</a></li>
              </ul>
              <p>
                Please note that if you choose to disable cookies, some features of our website may not function properly.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
              <p>
                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new 
                Cookie Policy on this page and updating the "Last updated" date.
              </p>
              
              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@miczone-live.com
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-miczone-gray">
              <Link to="/" className="text-miczone-accent hover:underline">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
