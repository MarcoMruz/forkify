import previewView from './previewView.js';
import View from './View.js';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMsg = 'Not found any recipes for your query!';
  _message;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
