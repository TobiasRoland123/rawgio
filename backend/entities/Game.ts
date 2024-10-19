import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Genre } from './Genre';
import { ParentPlatform } from './ParentPlatform';
import { Store } from './Store';

@Entity('games', { schema: 'rawgDatabase' })
export class Game {
  @Column('int', { primary: true, name: 'id' })
  id!: number;

  @Column('varchar', { name: 'name', length: 255 })
  name!: string;

  @Column('varchar', { name: 'background_image', nullable: true, length: 255 })
  backgroundImage!: string | null;

  @Column('int', { name: 'metacritic', nullable: true })
  metacritic!: number | null;

  @ManyToMany(() => Genre, (genres) => genres.games)
  @JoinTable({
    name: 'games_genres',
    joinColumns: [{ name: 'games_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'genres_id', referencedColumnName: 'id' }],
    schema: 'rawgDatabase',
  })
  genres!: Genre[];

  @ManyToMany(() => ParentPlatform, (parentPlatforms) => parentPlatforms.games)
  @JoinTable({
    name: 'games_parent_platforms',
    joinColumns: [{ name: 'games_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'parent_platforms_id', referencedColumnName: 'id' }],
    schema: 'rawgDatabase',
  })
  parent_platforms!: ParentPlatform[];

  @ManyToMany(() => Store, (stores) => stores.games)
  @JoinTable({
    name: 'games_stores',
    joinColumns: [{ name: 'games_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'stores_id', referencedColumnName: 'id' }],
    schema: 'rawgDatabase',
  })
  stores!: Store[];
}
