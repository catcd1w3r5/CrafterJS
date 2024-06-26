import { IFunctionRef } from "../../schema";
import { Namespace } from "../namespace";
import { asInlineFunction } from "./commandExtension";
// function PositionArgBuilder<T>(returnType: (position: IPosition) => T) {
//   function AtAbsolutePosition(x: number, y: number, z: number): T {
//     return returnType([x, y, z]);
//   }

//   function AtRelativePosition(x: number, y: number, z: number): T {
//     return returnType([`~${x}`, `~${y}`, `~${z}`]);
//   }

//   function AtCustomPosition(
//     x: number | string,
//     y: number | string,
//     z: number | string
//   ): T {
//     return returnType([x, y, z]);
//   }

//   return { AtAbsolutePosition, AtRelativePosition, AtCustomPosition };
// }

export class CommandInstance {
  public readonly command: string;
  constructor(command: string) {
    this.command = command;
  }

  public asInlineFunction(namespace: Namespace): IFunctionRef {
    return asInlineFunction(this, namespace);
  }
}
