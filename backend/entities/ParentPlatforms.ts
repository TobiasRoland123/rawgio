import { Column, Entity, ManyToMany } from 'typeorm';
import { Game } from './Game';

@Entity('parent_platform', { schema: 'rawgDatabase' })
export class ParentPlatform {
  @Column('int', { primary: true, name: 'id' })
  id!: number;

  @Column('varchar', { name: 'name', length: 45 })
  name!: string;

  @Column('varchar', { name: 'slug', length: 45 })
  slug!: string;

  @ManyToMany(() => Game, (games) => games.parentPlatforms)
  games!: Game[];
}
