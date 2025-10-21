import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-miczone-black py-12 border-t border-miczone-border-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">
              MIC<span className="gradient-text">ZONE</span>
            </h3>
            <p className="text-miczone-text-secondary mb-6">
              Ti offriamo esperienze musicali indimenticabili
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/miczone_/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative glow-effect"
              >
                <svg
                  className="w-8 h-8 text-miczone-text-secondary group-hover:text-miczone-accent transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-miczone-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  Instagram
                </span>
              </a>

              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/393669595453"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative glow-effect"
              >
                <svg
                  className="w-8 h-8 text-miczone-text-secondary group-hover:text-miczone-accent transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                    clipRule="evenodd"
                  />
                  <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107c-.114.305-.011.645.239.833.192.145.432.176.643.088l4.096-1.649C7.55 21.1 9.714 21.605 12 21.605c5.799 0 10.5-4.701 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5zm0 19.095c-2.006 0-3.976-.53-5.692-1.537l-.399-.227-3.205 1.292.966-3.192-.254-.432A8.932 8.932 0 012.91 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z" />
                </svg>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-miczone-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Link Rapidi</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-miczone-text-secondary hover:text-miczone-accent transition-colors"
              >
                Home
              </a>
              <a
                href="#events"
                className="text-miczone-text-secondary hover:text-miczone-accent transition-colors"
              >
                Eventi
              </a>
              <a
                href="#gallery"
                className="text-miczone-text-secondary hover:text-miczone-accent transition-colors"
              >
                Galleria
              </a>
              <a
                href="#"
                className="text-miczone-text-secondary hover:text-miczone-accent transition-colors"
              >
                Chi Siamo
              </a>
              <a
                href="#"
                className="text-miczone-text-secondary hover:text-miczone-accent transition-colors"
              >
                Contatti
              </a>
            </nav>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Collabora con Noi</h3>
            <div className="glass-card p-5 rounded-md">
              <p className="text-miczone-text-primary mb-4">
                Hai idee creative? Vuoi collaborare con noi?
              </p>
              <p className="text-sm text-miczone-text-secondary mb-4">
                Seguici sui social per proporre idee di collaborazione per
                servizi social, fotografia e altro. Prediligiamo la creatività e
                le idee innovative!
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-6 mt-4">
                <a
                  href="https://www.instagram.com/miczone_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glow-effect"
                >
                  <svg
                    className="w-8 h-8 text-miczone-text-secondary group-hover:text-miczone-accent transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-miczone-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Instagram
                  </span>
                </a>
                <a
                  href="https://wa.me/393669595453"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative glow-effect"
                >
                  <svg
                    className="w-8 h-8 text-miczone-text-secondary group-hover:text-miczone-accent transition-all duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967-.272-.099-.47-.148-.669.15-.198.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.668-1.612-.916-2.207-.241-.579-.486-.5-.668-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                      clipRule="evenodd"
                    />
                    <path d="M12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107c-.114.305-.011.645.239.833.192.145.432.176.643.088l4.096-1.649C7.55 21.1 9.714 21.605 12 21.605c5.799 0 10.5-4.701 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5zm0 19.095c-2.006 0-3.976-.53-5.692-1.537l-.399-.227-3.205 1.292.966-3.192-.254-.432A8.932 8.932 0 012.91 12c0-4.962 4.038-9 9-9s9 4.038 9 9-4.038 9-9 9z" />
                  </svg>
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-miczone-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-miczone-gray text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link
              to="/privacy-policy"
              className="text-miczone-text-secondary hover:text-miczone-accent text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <a
              href="#"
              className="text-miczone-text-secondary hover:text-miczone-accent text-sm transition-colors"
            >
              Termini di Servizio
            </a>
            <span className="text-gray-500">|</span>
            <Link
              to="/cookie-policy"
              className="text-miczone-text-secondary hover:text-miczone-accent text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
          <p className="text-miczone-text-muted text-sm">
            &copy; {new Date().getFullYear()} MICZONE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
