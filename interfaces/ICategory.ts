import ISubCategories from "./subinterfaces/ISubCategories"

export default interface ICategory {
    icon?: {
        name: string
        fileId: string
    } 
    id: string
    name: string
    subcategories: Array<ISubCategories>
}