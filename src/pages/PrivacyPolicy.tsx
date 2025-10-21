import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "events", label: "Eventi" },
    { id: "gallery", label: "Galleria" },
  ];

  return (
    <div className="min-h-screen bg-miczone-dark text-white">
      <Navbar sections={sections} />

      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-miczone-black/50 backdrop-blur-md p-6 md:p-8 rounded-lg border border-miczone-gray">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to Miczone Live ("we," "our," or "us"). We respect your
                privacy and are committed to protecting your personal data. This
                privacy policy will inform you about how we handle your personal
                data when you visit our website and tell you about your privacy
                rights.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                2. Data We Collect
              </h2>
              <p>
                <strong>
                  We do not collect personal data from you when you browse our
                  website.
                </strong>{" "}
                Our website is designed to be informational only, providing
                details about our events and services without tracking or
                collecting your personal information.
              </p>
              <p>
                The only instance where we might collect personal data is if you
                voluntarily provide your email address to subscribe to our
                newsletter. In this case, we will only use your email address to
                send you information about upcoming events and promotions.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                3. Cookies
              </h2>
              <p>
                Our website only uses strictly necessary cookies that are
                essential for the website to function properly. These cookies do
                not track you or collect any personal information. They are
                typically only set in response to actions you take that
                constitute a request for services, such as setting your privacy
                preferences or filling in forms.
              </p>
              <p>
                We do not use any analytics, marketing, or tracking cookies. We
                do not allow third parties to place cookies on your device
                through our website.
              </p>

              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                4. Newsletter Subscription
              </h2>
              <p>
                If you choose to subscribe to our newsletter by providing your
                email address:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>
                  We will only use your email address to send you our newsletter
                </li>
                <li>
                  We will not share your email address with any third parties
                </li>
                <li>
                  You can unsubscribe at any time by clicking the unsubscribe
                  link in any newsletter
                </li>
                <li>
                  Your data will be stored securely and only for as long as
                  necessary to provide the service
                </li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                5. Your Rights
              </h2>
              <p>
                Under GDPR and other applicable data protection laws, you have
                rights related to your personal data, including:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of your personal data</li>
                <li>The right to erasure of your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>

              <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our data
                practices, please contact us at:
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

export default PrivacyPolicy;
