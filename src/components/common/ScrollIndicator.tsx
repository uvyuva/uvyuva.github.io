/**
 * --------------------------------------------------
 * UV Portfolio
 * Component: Scroll Indicator
 * Author: Yuvaraj P.
 * --------------------------------------------------
 */

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-4">

      <span className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
        Scroll
      </span>

      <div className="h-14 w-px bg-neutral-300" />

    </div>
  );
};

export default ScrollIndicator;