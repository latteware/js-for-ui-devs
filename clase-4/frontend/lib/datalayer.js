const DataLayer = class {
	constructor() {
		console.log('datalayer')

		this._items = {}
	}

	registry(name, item){
		this._items[name] = item
	}

	get(name){
		return this._items[name]
	}
}

const datalayer = new DataLayer()

module.exports = datalayer