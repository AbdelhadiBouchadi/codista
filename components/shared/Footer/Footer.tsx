import FooterCaptions from './FooterCaptions';
import FooterLogo from './FooterLogo';
import FooterMenu from './FooterMenu';

export default function Footer() {
  return (
    <footer
      className="relative h-[800px] footer"
      style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <div className="footerBg-webp text-alt-white py-8 sm:px-6 tablet:px-12 h-full w-full flex flex-col justify-between relative">
            <FooterMenu />
            <FooterLogo />
            <FooterCaptions />
          </div>
        </div>
      </div>
    </footer>
  );
}
