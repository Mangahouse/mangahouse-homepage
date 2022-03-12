import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <a href="/">
        <LogoIcon />
      </a>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#">
          Manga House
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          $MAHO TOKEN
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          MEDIA
        </AnchorLink>
        <AnchorLink className="px-4" href="#">
          Wiki
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">Buy $MAHO</Button>
      </div>
    </div>
  </header>
);

export default Header;
