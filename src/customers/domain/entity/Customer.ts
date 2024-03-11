import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "customer",
})

export default class Customer {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "integer",
  })
  id: number;

  @Column({
    name: "firstName",
    type: "varchar",
    length: 60,
  })
  firstName: string;

  @Column({
    name: "lastName",
    type: "varchar",
    length: 60,
  })
  lastName: string;

  @Column({
    name: "email",
    type: "varchar",
    length: 60,
  })
  email: string;

  @Column({
    name: "phone",
    type: "varchar",
    length: 15,
  })
  phone: string;

  @Column({
    name: "address",
    type: "varchar",
    length: 200,
  })
  address: string;


}
