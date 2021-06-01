import 'reflect-metadata';
import express, { Application } from 'express'
import { buildSchema } from 'type-graphql';
import { graphqlHTTP } from 'express-graphql'
import { RecipeResolver } from './resolvers/recipe.resolver';


const start = async () => {
	const app: Application = express();

	const schema = await buildSchema({
		resolvers: [RecipeResolver],
		dateScalarMode: 'timestamp'
	});

	const middleware = graphqlHTTP({
		schema: schema,
		graphiql: true
	});

	app.use('/graphql', middleware);
	app.listen(3000);
};

start();