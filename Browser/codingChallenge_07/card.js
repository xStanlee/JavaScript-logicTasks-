class Card {
  constructor(catPostfix) {
    this.catPostfix = catPostfix;
    this.name = "cat";
  }

  renderCard() {
    return `<div class="bg-blue-500 px-6 py-8 rounded-lg shadow-lg text-center">
          <div class="mb-3 flex justify-center">
            <div>
              <img class="rounded-md" src="https://cataas.com/cat?${
                this.catPostfix
              }" alt="" />
            </div>
          </div>

          <h2 class="text-xl font-medium text-white pb-5">${
            this.name
          } #Random</h2>

          <a href="#" class="bg-orange-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            >Cute!</a
          >
        </div>`;
  }
}

export { Card };
