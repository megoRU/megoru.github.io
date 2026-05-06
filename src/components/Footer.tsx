export const Footer = () => {
  return (
    <footer className="px-6 max-w-7xl mx-auto pt-20 pb-32">
      <div className="flex flex-col items-start gap-4">
        <p className="text-2xl font-bold text-[var(--footer-text-color)]">
          Заказать проект...
        </p>
        <p className="text-lg font-semibold text-[var(--footer-text-color)]">
          Telegram →{' '}
          <a
            href="https://t.me/mego_RU"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--telegram-link-color)] hover:underline"
          >
            mego_RU
          </a>
        </p>
      </div>
    </footer>
  );
};
