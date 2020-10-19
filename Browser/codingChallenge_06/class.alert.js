class GreatAlert {
  constructor(name) {
    this.name = name;

    switch (name) {
      case "Error":
        this.message = "Coś totalnie poszło nie tak.";
        this.color = "red";
        break;
      case "Warning":
        this.message = "Uważaj! To co robisz, nie jest ok!";
        this.color = "yellow";
        break;
      case "Success":
        this.message = "Cudownie! Działaj dalej :)";
        this.color = "green";
        break;
      default:
        console.log("Err");
    }
  }

  popUp() {
    return `
      <div class="inline-flex items-center bg-white leading-none text-${
        this.color
      }-600 rounded-full p-2 shadow text-teal text-sm">
        <span class="inline-flex bg-${
          this.color
        }-600 text-white rounded-full h-6 px-3 justify-center items-center">${
      this.name
    }</span>
        <span class="inline-flex px-2">${this.message}</span>
      </div>
    `;
  }
}

export { GreatAlert };
