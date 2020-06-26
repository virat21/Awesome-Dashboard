import { uuid } from "uuidv4";
class ColorModel {
  colors: string[];
  id: string;
  isFavorite: boolean;
  constructor(
    colors: string[],
    isFavorite: boolean = false,
    id?: string
  ) {
    this.colors = colors;
    this.id = id || uuid();
    this.isFavorite = isFavorite;
  }

  static fromJson(jsonData: string) {
    let _json = JSON.parse(jsonData);
    return new this(
      _json.colors,
      _json.isFavorite,
      _json.id
    );
  }

  save() {
    localStorage.setItem(
      this.id,
      JSON.stringify({
        id: this.id,
        isFavorite: this.isFavorite,
        colors: this.colors,
      })
    );
  }

  remove() {
    localStorage.removeItem(this.id);
  }
}

export default ColorModel;
