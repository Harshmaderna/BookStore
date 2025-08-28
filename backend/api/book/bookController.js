import books from "./book_model.js"

const bookController = {
    createBook: async(req, res) => {
       try {
         const {name, price, category, image, title} = req.body;
        if(!name || !price || !category || !image || !title) {
            return res.status(404).json({Error: "book not found"})
        } 
        const book = await books.create({
            name,
            price,
            category,
            title,
            image
        });
        return res.status(201).json({message: "books created successfully", data:book})
       } catch (error) {
        return res.status(500).json({message: "ERROR in created book", error: error.message})
       }
    },
    getAllBooks: async (req, res) => {
        try {
            const book = await books.findAll()
            return res.status(200).json({message: "All Books fetched successfully", data:book})
        } catch (error) {
            return res.status(500).json({message: "error in find book", error: error.message})
        }
    }
}

export default bookController;