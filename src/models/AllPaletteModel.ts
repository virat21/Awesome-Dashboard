import ColorModel from "./ColorModel";

class AllPaletteModel {
  colors: ColorModel[] = [];
  colorIds: string[] = [];
  private static instance: AllPaletteModel;
  static getInstance() {
    if (!AllPaletteModel.instance)
      AllPaletteModel.instance = new AllPaletteModel();

    return AllPaletteModel.instance;
  }

  loadAll() {
    this.colorIds = JSON.parse(
      localStorage.getItem("allColors") || "[]"
    );
    this.colorIds.forEach((colorId) => {
      let data =
        localStorage.getItem(colorId) || null;
      if (data)
        this.colors.push(
          ColorModel.fromJson(data)
        );
    });
  }

  addOrUpdateColor(color: ColorModel) {
    let isExits = this.colorIds.includes(
      color.id
    );
    if (isExits) {
      color.save();
      return;
    }

    this.colorIds.push(color.id);
    this.colors.push(color);
    color.save();
    this.saveIds();
  }

  removeColorById(colorId: string) {
    this.colorIds = this.colorIds.filter(
      (id) => id !== colorId
    );
    this.colors = this.colors.filter(
      (color) => color.id !== colorId
    );
    this.saveIds();
  }

  saveIds() {
    localStorage.setItem(
      "allColors",
      JSON.stringify(this.colorIds)
    );
  }
}

export default AllPaletteModel;
