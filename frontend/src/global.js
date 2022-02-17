export default {
    mode: 'dev',
    URL: {
        dev: 'http://localhost:2272/circuits',
        pro: 'http://localhost:9000/circuits'
    },
    getURL: function() {
        if(this.mode == 'dev')
            return this.URL.dev;
        else
            return this.URL.pro;
    }
};