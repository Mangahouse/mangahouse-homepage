import React from 'react';

const Footer = () => (
  // <footer className="container mx-auto py-16 px-3">
  <footer className="mx-auto py-16 px-3 bg-gray-400">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <img className="max-w-sm" src="/static/mangahouse-logo.png" alt="mangahouse logo" />
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">Publication Request Form</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://twitter.com/MangaHouseNFT" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="#" target="_blank">Discord</a>
          </li>
          <li>
            <a href="#" target="_blank">Telegram</a>
          </li>
          <li>
            <a href="https://github.com/Mangahouse" target="_blank">GitHub</a>
          </li>
          <li>
            <a href="https://github.com/Mangahouse" target="_blank">Medium</a>
          </li>
          <li>
            <a href="https://github.com/Mangahouse" target="_blank">Gitbook</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
