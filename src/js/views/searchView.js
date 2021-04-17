class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const element = this._parentEl.querySelector('.search__field').value;
    this.clearInput();
    return element;
  }

  clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
