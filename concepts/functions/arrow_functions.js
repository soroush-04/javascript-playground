const obj = {
    value: 42,
    getValue: function() {
        return () => this.value;
    }
};

const value = obj.getValue();
console.log(value());