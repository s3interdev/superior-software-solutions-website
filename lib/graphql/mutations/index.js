import { gql } from 'graphql-request';

/* create blog post comment */
export const createComment = gql`
	mutation createComment(
		$name: String!
		$email: String!
		$comment: String!
		$slug: String!
	) {
		createComment(
			data: {
				name: $name
				email: $email
				comment: $comment
				post: { connect: { slug: $slug } }
			}
		) {
			id
		}
	}
`;
