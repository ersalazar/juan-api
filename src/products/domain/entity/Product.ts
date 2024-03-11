import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({
    name: "product",
})

export default class Product {

    @PrimaryGeneratedColumn({
        name: "id",
        type: "integer",
    })
    id: number;

    @Column({
        name: "name",
        type: "varchar",
        length: 60,
    })
    name: string;

    @Column({
        name: "description",
        type: "varchar",
        length: 200,
    })
    description: string;

    @Column({
        name: "price",
        type: "decimal",
        precision: 10,
        scale: 2,
    })
    price: number;

    @Column({
        name: "stock",
        type: "integer",
    })
    stock: number;

}