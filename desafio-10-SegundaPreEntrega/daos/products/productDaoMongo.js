import { ProductsModel } from "../../models/product.js";


export class ProductDao {

    ID_FIELD = "_id";


    static async exists(id) {
        try {
            return await ProductsModel.findById(id);
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            return await ProductsModel.find();
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async getProductById(objectId) {
        try {
            const product = await ProductsModel.findOne({
                [this.ID_FIELD] : objectId
            })
            console.log(product);
            return product;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async createProduct(object) {
        try {
            return await ProductsModel.create(object)
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async updateProductById(id, object) {
        try {
            await ProductsModel.findByIdAndUpdate(
                {
                    [this.ID_FIELD] : id
                },
                object, 
                {
                    runValidators: true
                })
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    
    async deleteProductById(id) {
        try {
            return await ProductsModel.findByIdAndDelete({[this.ID_FIELD]: id})
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}