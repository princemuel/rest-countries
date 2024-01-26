import { tw } from "@/helpers";
import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Outer = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div ref={forwardedRef} className={tw("sm:px-8", className)} {...props}>
        <div className="mx-auto w-full max-w-screen-2xl lg:px-8">
          {children}
        </div>
      </div>
    );
  },
);
Outer.displayName = "OuterContainer";

const Inner = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        ref={forwardedRef}
        className={tw("relative px-4 md:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-screen-md lg:max-w-screen-xl">
          {children}
        </div>
      </div>
    );
  },
);
Inner.displayName = "InnerContainer";

const Wrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <Outer ref={forwardedRef} {...props}>
        <Inner>{children}</Inner>
      </Outer>
    );
  },
);
Wrapper.displayName = "Container";

export const Container = Object.assign({}, Wrapper, { Inner, Outer });
