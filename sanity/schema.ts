import { type SchemaTypeDefinition } from "sanity";
import experience from "./schemaTypes/experience";
import pageInfo from "./schemaTypes/pageInfo";
import project from "./schemaTypes/project";
import skill from "./schemaTypes/skill";
import social from "./schemaTypes/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, pageInfo, project, skill, social],
};
