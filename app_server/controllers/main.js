/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Online Education Platform' });
   };
   module.exports = {
    index
   };