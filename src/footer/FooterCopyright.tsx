import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © Copyright {new Date().getFullYear()} {AppConfig.title}. <br />
    Contact{' '}
    <span role="img" aria-label="Email" className="footer-enveloppe">
      ✉
    </span>
    <a href="mailto:info@apexoutaouais.cc">info@apexoutaouais.cc</a>
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
        .footer-enveloppe {
          margin: 0 8px 0 0;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
