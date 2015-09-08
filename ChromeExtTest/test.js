'use strict';
function ItemModelGenerator() {
  function ItemModel(inputItem) {
    var defaults = {
      id:'na',
      name:'na'
    };
    var location = inputItem ? inputItem : { defaults };
    this.id = location.id;
    this.name = location.itemName ? location.itemName : location.name;
    this.itemIsReal = this.isReal(this.id);
  }

  ItemModel.prototype.isReal = function(id) {
    return id !== false ? true : false;
  };

  return ItemModel;
}
