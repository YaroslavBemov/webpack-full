class Post {
    constructor(title, date) {
        this.title = title
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON(),
        })
    }
}
