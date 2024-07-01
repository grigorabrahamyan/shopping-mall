import { Category } from './category.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ unique: true, length: 8 })
  sku: string;

  @Column('decimal')
  price: number;

  @ManyToOne(() => Category, (category) => category.products)
  category: Category;
}
