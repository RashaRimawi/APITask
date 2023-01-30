const products = [{id :'1', name: 'bus', cat_id: '2' },
               {id :'3', name: 'iphone', cat_id: '1' }];

export const getProducts = async (req, res, next) => {
    try{
        res.json({ ok: true, products });

    }catch(err){
        return res.status(500).json({
            error: "server error",
            message: err.message
        });
    }
};

export const getProductsById = async (req, res, next) => {
    try{
        const { id } = req.params;
        const fundedUsers = products.filter((product) => product.id === id);
        res.json({ ok: true, fundedUsers });
        
    }catch(err){
        return res.status(500).json({
            error: "server error",
            message: err.message
        });
    }
};

export const addproducts = async (req, res, next) => {
    try{
        const {id,name,cat_id}= req.body;
    if(id && name && cat_id){
        products.push({id,name,cat_id});
        res.json({ok:true,products});
    }
    }catch(err){
        return res.status(500).json({
            error: "server error",
            message: err.message
        });
    }
};

export const deleteproducts = async (req, res, next) => {
    try{
        const { id } = req.params;
        const productsIndex = products.findIndex((product) => product.id === id);
        products.splice(productsIndex, 1);
        res.json({ok:true,products});
    }catch(err){
        return res.status(500).json({
            error: "server error",
            message: err.message
        });
    }
};

export const updateproducts = async (req, res, next) => {
    try{
        const {id,name,cat_id}= req.body;
        const prod = products.find(product => product.id == id);
        prod.name = name;
        prod.cat_id = cat_id;
        res.json({ok:true,products});
    }catch(err){
        return res.status(500).json({
            error: "server error",
            message: err.message
        });
    }
};