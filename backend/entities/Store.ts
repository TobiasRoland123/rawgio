import { Column, Entity, ManyToMany } from 'typeorm';
import { Game } from './Game';

@Entity('stores', { schema: 'rawgDatabase' })
export class Store {
  @Column('int', { primary: true, name: 'id' })
  id!: number;

  @Column('varchar', { name: 'name', length: 45 })
  name!: string;

  @Column('varchar', { name: 'slug', length: 45 })
  slug!: string;

  @Column('varchar', { name: 'image_background', nullable: true, length: 255 })
  imageBackground!: string | null;

  @ManyToMany(() => Game, (games) => games.stores)
  games!: Game[];
}
