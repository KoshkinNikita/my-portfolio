"use client";

type ServiceLinkProps = {
  service: string;
  serviceValue: string;
  price: string;
  description: string;
};

export default function ServiceLink({
  service,
  serviceValue,
  price,
  description,
}: ServiceLinkProps) {
  const handleClick = () => {
    window.dispatchEvent(
      new CustomEvent("noir-service-select", {
        detail: serviceValue,
      })
    );

    document.querySelector("#booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="group flex w-full items-center justify-between gap-8 border-b border-white/15 py-7 text-left"
    >
      <div>
        <h3 className="text-xl font-semibold transition-transform duration-300 group-hover:translate-x-2">
          {service}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          {description}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-8">
        <span className="text-lg transition-colors duration-300 group-hover:text-amber-300">
          {price}
        </span>

        <span className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-300">
          →
        </span>
      </div>
    </button>
  );
}