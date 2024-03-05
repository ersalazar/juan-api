import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity({
    name: "unidad",
  })
  export default class UnitTypes {
    @PrimaryGeneratedColumn({
      name: "id_unidad",
      type: "integer",
    })
    id: number;
  
    @Column({
      name: "nombre_unidad",
      type: "varchar",
      length: 60,
    })
    unitName: string;
  
    @Column({
      name: "alias",
      type: "varchar",
      length: 60,
    })
    alias: string;
  
    @Column({
      name: "status",
      type: "tinyint",
    })
    status: number;
  
    @Column({
      name: "created_by",
      type: "varchar",
      length: 100,
    })
    createdBy: string;
  
  
    @Column({
      name: "created_at",
      type: "timestamp",
    })
    createdAt: Date;
  
    @Column({
      name: "updated_by",
      type: "varchar",
      length: 100,
    })
    updatedBy: string;
  
    @Column({
      name: "updated_at",
      type: "timestamp",
    })
    updatedAt: Date;
  
  
    @Column({
      name: "id_prestashop",
      type: "int",
    })
    prestashopId: number;
  }
  