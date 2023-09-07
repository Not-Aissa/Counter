import Counter from "./ts/helpers/classes/Counter";
import CounterUI from "./ts/helpers/classes/CounterUI";
import dom from "./ts/helpers/classes/Dom";
import Button from "./ts/types/elements/Button";
import Input from "./ts/types/elements/Input";

const countIncreaseBtn = dom.select<Button>("#increase_count_btn");
const countDecreaseBtn = dom.select<Button>("#decrease_count_btn");
const countResetBtn = dom.select<Button>("#reset_count_btn");
const countFreezeBtn = dom.select<Button>("#freeze_count_btn");
const countUnFreezeBtn = dom.select<Button>("#unfreeze_count_btn");
const changeByInput = dom.select<Input>("#change_by_input");

const counter = new Counter({ count: 0, changeBy: 1, isFreezing: false });

const counterUI = new CounterUI({ counter });

console.log(counter);

console.log(counterUI);

window.addEventListener("load", () => {
  counterUI.updateCount();
  counterUI.updateCountChangeBy();
  counterUI.updateChangeByInput();
  counterUI.checkFreezeState();
});

countIncreaseBtn.addEventListener("click", () => {
  counter.increase();

  counterUI.updateCount();
});

countDecreaseBtn.addEventListener("click", () => {
  counter.decrease();

  counterUI.updateCount();
});

countResetBtn.addEventListener("click", () => {
  counter.reset();

  counterUI.updateCount();

  counterUI.updateCountChangeBy();

  counterUI.updateChangeByInput();
});

countFreezeBtn.addEventListener("click", () => {
  counter.freeze();

  counterUI.checkFreezeState();
});

countUnFreezeBtn.addEventListener("click", () => {
  counter.unfreeze();

  counterUI.checkFreezeState();
});

changeByInput.addEventListener("input", (e: any) => {
  counter.updateChangeBy(parseInt(e.target.value));

  counterUI.updateCountChangeBy();
});
