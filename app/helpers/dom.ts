// eslint-disable func-style
// eslint-disable max-params
import { throwAsError } from "@/helpers/error";

/**
 * Find a DOM element or elements and validate their types.
 * @example
 * // Single element
 * const button = $("button", HTMLButtonElement)
 *
 * // Multiple elements
 * const buttons = $("button", HTMLButtonElement, document, true)
 */
export function $<E extends Element>(
  selector: string,
  Constructor: new (...args: unknown[]) => E,
  parent?: ParentNode,
  multiple?: false,
): E;
export function $<E extends Element>(
  selector: string,
  Constructor: new (...args: unknown[]) => E,
  parent?: ParentNode,
  multiple?: true,
): NodeListOf<E>;

export function $<E extends Element>(
  selector: string,
  Constructor: new (...args: unknown[]) => E,
  parent: ParentNode = document,
  multiple = false,
): E | NodeListOf<E> {
  if (multiple) {
    const elements = parent.querySelectorAll(selector);
    for (const element of elements) {
      if (!(element instanceof Constructor)) {
        throwAsError(`Element is not of type ${Constructor.name}: ${selector}`);
      }
    }
    return elements as NodeListOf<E>;
  }

  const element =
    parent.querySelector(selector) ?? throwAsError(`Element not found: ${selector}`);
  if (!(element instanceof Constructor)) {
    throwAsError(`Element is not of type ${Constructor.name}: ${selector}`);
  }
  return element as E;
}

export const createElement = (name: string, ctor: CustomElementConstructor) => {
  if (!customElements.get(name)) customElements.define(name, ctor);
};
