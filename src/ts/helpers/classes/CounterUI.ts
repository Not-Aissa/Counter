import Button from "../../types/elements/Button";
import Input from "../../types/elements/Input";
import Span from "../../types/elements/Span";
import CounterUIOptions from "../types/CounterUIOptions";
import Counter from "./Counter";
import dom from "./Dom";

const countElm = dom.select<Span>("#count_elm");
const countChangeByElm = dom.select<Span>("#count_change_by_elm");
const isFreezingElm = dom.select<Span>("#is_freezing_elm");
const countFreezeBtn = dom.select<Button>("#freeze_count_btn");
const countUnFreezeBtn = dom.select<Button>("#unfreeze_count_btn");
const changeByInput = dom.select<Input>("#change_by_input");

class CounterUI {
  private _counter: Counter;

  public constructor(options: CounterUIOptions) {
    this._counter = options.counter;
  }

  public updateCount(): void {
    countElm.textContent = `${this._counter.count}`;
  }

  public updateCountChangeBy(): void {
    this._counter.changeBy >= 0
      ? (countChangeByElm.textContent = `${this._counter.changeBy}`)
      : (countChangeByElm.textContent = "1");
  }

  public checkFreezeState(): void {
    if (this._counter.isFreezing) {
      dom.classList(countUnFreezeBtn, "remove", "hide");
      dom.classList(countFreezeBtn, "add", "hide");
      isFreezingElm.textContent = "Yes";
    } else {
      dom.classList(countFreezeBtn, "remove", "hide");
      dom.classList(countUnFreezeBtn, "add", "hide");
      isFreezingElm.textContent = "No";
    }
  }

  public updateChangeByInput(): void {
    changeByInput.value = `${this._counter.changeBy}`;
  }
}

export default CounterUI;
