//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (arrayOfColors) => {
  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  let colors = [];

  arrayOfColors.forEach((color) => {
    colors.push(COLORS.indexOf(color).toString());
  });

  const concatenator = (arrayOfStrings) => {
    let string = "";

    // In the event there are more than two colors passed in:
    for(var i = 0; i < colors.length; i++){
      string = string + colors[i];
    };

    // TODO make it so any leading zero is not stripped
    return parseInt(string);
  }

  return concatenator(colors);
};
