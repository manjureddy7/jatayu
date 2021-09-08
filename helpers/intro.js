const figlet = require('figlet');

const intro = () => figlet('Welcome to JATAYU!!!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


module.exports = {
    intro
};