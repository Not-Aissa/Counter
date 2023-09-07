import storageGet from "../functions/storageGet";
import storageSet from "../functions/storageSet";
import CounterOptions from "../types/CounterOptions";

class Counter {
  private _count: number;
  private _changeBy: number;
  private _isFreezing: boolean;

  public constructor(options: CounterOptions) {
    this._count = storageGet("count", true) || options.count;
    this._changeBy = storageGet("changeBy", true) || options.changeBy;
    this._isFreezing = localStorage.getItem("isFreezing")
      ? storageGet("isFreezing", true)
      : options.isFreezing;
  }

  public increase(): void {
    if (this._isFreezing) return;

    this._changeBy > 0 ? (this._count += this._changeBy) : (this._count += 1);

    storageSet("count", JSON.stringify(this._count));
  }

  public decrease(): void {
    if (this._isFreezing) return;

    if (this._changeBy > 0) {
      if (this._count > 0 && this._count >= this._changeBy)
        this._count -= this._changeBy;
    } else {
      if (this._count > 0) this._count -= 1;
    }

    storageSet("count", JSON.stringify(this._count));
  }

  public reset(): void {
    if (this._isFreezing) return;

    this._count = 0;

    this._changeBy = 1;

    storageSet("count", JSON.stringify(this._count));

    storageSet("changeBy", JSON.stringify(this._changeBy));
  }

  public freeze(): void {
    this._isFreezing = true;

    storageSet("isFreezing", JSON.stringify(this._isFreezing));
  }

  public unfreeze(): void {
    this._isFreezing = false;

    storageSet("isFreezing", JSON.stringify(this._isFreezing));
  }

  public updateChangeBy(value: number): void {
    this._changeBy = value;

    storageSet("changeBy", JSON.stringify(this._changeBy));
  }

  public get count(): number {
    return this._count;
  }

  public get changeBy(): number {
    return this._changeBy;
  }

  public get isFreezing(): boolean {
    return this._isFreezing;
  }
}

export default Counter;
