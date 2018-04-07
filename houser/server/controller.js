

module.exports = {
    getHouses: ( req, res ) => {
        req.app.get('db').view_Houses()
        .then( houses => {
            res.status(200).json({ houses })
        })
        .catch( err => {
            res.json(err)
        })
    },

    addHouse: ( req, res, next ) => {
        const { name, address, city, state, zipcode } = req.body;
        let newHouse = {
            name: name,
            address: address,
            city: city,
            state: state,
            zipcode: zipcode
        }
    } ,

    deleteHouse: ( req, res ) => {
        console.log(req.params)
            let index = houses.filter(e => {
                if(e.id == req.params.id){
                    return true;
                }
            })
            houses.splice(index.id,1)
            console.log(houses)
            res.status(200).send(houses)
        }
}