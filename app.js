'use strict';

$(document).ready( () => {
  console.log('app started');
  new Catalog();
});

class Catalog {
  constructor () {
    this.data = null;
    this.current = 'r61';
    this.getData();
  }
  
  getData () {
    $.getJSON('rename.json', res => {
      this.data = res;
      this.fillSelector();
      this.fillTable();
    });
  }
  
  fillSelector () {
    let result = '', self = this;
    for (let key in this.data) {
      if (typeof this.data[key] === 'object')
        result += `<option value="${key}">${this.data[key].newAreaName}</option>`; 
    }
    $('#area-selector').html(result).on('change', () => {
      this.current = $('#area-selector').val();
      this.fillTable();
    });
  }
  
  fillTable () {
    let streets = this.data[this.current].objects, result = '';
    streets.map( item => {
      let names = `<tr><td class="table-danger">${item.oldName}</td><td class=" table-success">${item.newName}</td>`,
          link = !!item.link 
            ? `<td class="table-primary"><a href="${item.link.href}">wikipedia</a></td>` 
            : `<td class="table-primary">&nbsp;</td>`,
          history =  item.restored
            ? `<td class="table-info"><img src="svg/si-glyph-castle.svg"/></td>`
            : `<td class="table-info"></td>`;
      result += names + link + history +`</tr>`;
    });
    $('#table-data').html(result);
  }
  
  
}