const WHATSAPP_NUMBER = "919925552595";
const WHATSAPP_MESSAGE = "Hello! I'm interested in learning more about SUGAMI Cloud and AI Technologies training programs.";

export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip label */}
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-gray-900 text-white text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
        Chat with us
      </span>

      {/* Button */}
      <div className="relative h-14 w-14 flex items-center justify-center rounded-full shadow-lg bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 transition-all duration-200">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        {/* WhatsApp SVG icon */}
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-white relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16c0 2.347.63 4.64 1.827 6.653L2.667 29.333l6.88-1.8A13.29 13.29 0 0 0 16.004 29.333C23.36 29.333 29.333 23.36 29.333 16S23.36 2.667 16.004 2.667Zm0 24.267a11.014 11.014 0 0 1-5.6-1.534l-.4-.24-4.08 1.067 1.093-3.973-.267-.413A10.946 10.946 0 0 1 5.067 16c0-6.04 4.907-10.947 10.947-10.947S26.96 9.96 26.96 16 22.044 26.934 16.004 26.934Zm6.013-8.2c-.333-.16-1.947-.96-2.253-1.066-.307-.12-.52-.16-.747.16-.213.32-.84 1.066-1.04 1.28-.187.2-.387.226-.72.066-.333-.16-1.4-.52-2.667-1.64-.987-.88-1.653-1.96-1.853-2.293-.187-.32-.013-.493.16-.653.147-.147.333-.373.507-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.747-1.8-1.027-2.466-.267-.654-.546-.56-.746-.574-.2-.013-.413-.013-.627-.013-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666s1.147 3.094 1.307 3.307c.16.213 2.253 3.44 5.467 4.827.76.333 1.36.533 1.826.68.773.24 1.467.2 2.027.12.614-.093 1.893-.773 2.16-1.52.267-.746.267-1.386.187-1.52-.08-.12-.293-.2-.627-.36Z" />
        </svg>
      </div>
    </a>
  );
}
