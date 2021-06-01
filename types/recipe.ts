import { Field, ID, ObjectType, registerEnumType } from 'type-graphql'
import { Flavor } from '../enums/flavor.enum';

registerEnumType(Flavor, {
  name: "Flavor",
  description: "The main flavour",
});


@ObjectType()
export class Recipe {
  @Field(type => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  averageRating?: number;

  @Field()
  signed?: Date;

  @Field(type => Flavor)
  flavor: Flavor;
}

// @ObjectType({ description: "The recipe model" })
// class Recipe {
//   @Field(type => ID)
//   id: string;

//   @Field({ description: "The title of the recipe" })
//   title: string;

//   @Field({ nullable: true })
//   averageRating?: number;
// }

