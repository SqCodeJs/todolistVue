const { createApp } = Vue;

createApp({
    data() {
        return {
            items: [],
            task: "",
        };
    },
    methods: {
        getId() {
            return this.items.length ? this.items[this.items.length - 1].id + 1 : 1;
        },
        add() {
            this.items.push({ name: this.task, id: this.getId(), completed: false });
            this.task = "";
        },
        completeTask(id) {
            const items = this.items.map(item => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }

                return item;
            });

            this.items = items
        },
        remove(id) {
            const items = this.items.filter(item => item.id !== id);
            this.items = items;
        }
    }

}).mount('#app');